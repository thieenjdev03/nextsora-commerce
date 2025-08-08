import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: "User password (optional for updates)",
    example: "newpassword123",
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  password?: string;

  @ApiProperty({
    description: "Hashed refresh token",
    required: false,
  })
  @IsOptional()
  @IsString()
  refreshTokenHash?: string | null;

  @ApiProperty({
    description: "Token version for invalidation",
    required: false,
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  tokenVersion?: number;
}
