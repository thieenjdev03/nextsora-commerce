import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { User } from "../users/schemas/user.schema";
import { CustomLogger } from "../common";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly logger: CustomLogger
  ) {}

  private async issueTokens(user: any) {
    const payload = {
      email: user.email,
      sub: user._id || user.id,
      tv: user.tokenVersion || 0,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: "24h" });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: "30d" });

    // Store hashed refresh token
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
    await this.usersService.update(user._id || user.id, { refreshTokenHash });

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.validatePassword(email, password);
    if (user) {
      const { password: _, refreshTokenHash: __, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    this.logger.log(
      `Login attempt for email: ${loginDto.email}`,
      "AuthService"
    );

    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      this.logger.warn(
        `Failed login attempt for email: ${loginDto.email}`,
        "AuthService"
      );
      throw new UnauthorizedException("Invalid credentials");
    }

    this.logger.log(
      `Successful login for user: ${user.email} (${user.role})`,
      "AuthService"
    );

    const tokens = await this.issueTokens(user);

    return {
      ...tokens,
      user: {
        id: user._id || user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        avatar: user.avatar,
        role: user.role,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    this.logger.log(
      `Registration attempt for email: ${registerDto.email}`,
      "AuthService"
    );

    try {
      const user = await this.usersService.create(registerDto);

      this.logger.log(
        `Successful registration for user: ${user.email}`,
        "AuthService"
      );

      const tokens = await this.issueTokens(user);

      return {
        ...tokens,
        user: {
          id: user._id || user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          fullName: user.fullName,
          avatar: user.avatar,
          role: user.role,
        },
      };
    } catch (error) {
      this.logger.error(
        `Registration failed for email: ${registerDto.email}`,
        error.stack,
        "AuthService"
      );
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new Error("Registration failed");
    }
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findOne(userId);
    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedException("Invalid refresh token");
    }

    const isValid = await bcrypt.compare(refreshToken, user.refreshTokenHash);
    if (!isValid) {
      throw new UnauthorizedException("Invalid refresh token");
    }

    // Optionally bump tokenVersion to invalidate old refresh tokens
    // await this.usersService.update(user.id, { tokenVersion: (user.tokenVersion || 0) + 1 });

    return this.issueTokens(user);
  }

  async logout(userId: string, refreshToken: string) {
    const user = await this.usersService.findOne(userId);
    if (!user) throw new BadRequestException("User not found");

    // Ensure provided refreshToken matches stored hash before clearing
    if (user.refreshTokenHash) {
      const isValid = await bcrypt.compare(refreshToken, user.refreshTokenHash);
      if (!isValid) {
        throw new UnauthorizedException("Invalid refresh token");
      }
    }

    await this.usersService.update(userId, { refreshTokenHash: null });

    return { message: "Logged out successfully" };
  }

  async getProfile(user: User) {
    return {
      id: user._id || user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      avatar: user.avatar,
      role: user.role,
    };
  }
}
