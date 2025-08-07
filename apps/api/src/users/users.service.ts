import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BulkCreateUserDto } from './dto/bulk-create-user.dto';
import { BulkUpdateUserDto } from './dto/bulk-update-user.dto';
import { BulkDeleteUserDto } from './dto/bulk-delete-user.dto';
import { BulkOperationResult } from './dto/bulk-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email: createUserDto.email });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    // Create user
    const user = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel
      .find()
      .select('-password')
      .exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel
      .findById(id)
      .select('-password')
      .exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).select('+password').exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    // Check if user exists
    const user = await this.findOne(id);

    // Check email uniqueness if email is being updated
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUser = await this.userModel.findOne({
        email: updateUserDto.email,
        _id: { $ne: id },
      });

      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }
    }

    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .select('-password')
      .exec();
  }

  async remove(id: string): Promise<void> {
    const result = await this.userModel.findByIdAndDelete(id);
    
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async validatePassword(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  // BULK Operations
  async bulkCreate(bulkCreateUserDto: BulkCreateUserDto): Promise<BulkOperationResult> {
    const result: BulkOperationResult = {
      success: 0,
      failed: 0,
      total: bulkCreateUserDto.users.length,
      errors: [],
      successfulIds: []
    };

    for (const userDto of bulkCreateUserDto.users) {
      try {
        // Check if user already exists
        const existingUser = await this.userModel.findOne({ email: userDto.email });
        if (existingUser) {
          result.failed++;
          result.errors.push(`User with email ${userDto.email} already exists`);
          continue;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        
        // Create user
        const user = new this.userModel({
          ...userDto,
          password: hashedPassword,
        });
        
        const savedUser = await user.save();
        result.success++;
        result.successfulIds.push(savedUser._id.toString());
      } catch (error) {
        result.failed++;
        result.errors.push(`Failed to create user ${userDto.email}: ${error.message}`);
      }
    }

    return result;
  }

  async bulkUpdate(bulkUpdateUserDto: BulkUpdateUserDto): Promise<BulkOperationResult> {
    const result: BulkOperationResult = {
      success: 0,
      failed: 0,
      total: bulkUpdateUserDto.users.length,
      errors: [],
      successfulIds: []
    };

    for (const updateItem of bulkUpdateUserDto.users) {
      try {
        const updateData = { ...updateItem.data };
        
        // Hash password if provided
        if (updateData.password) {
          updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        const updatedUser = await this.userModel.findByIdAndUpdate(
          updateItem.id,
          updateData,
          { new: true }
        );

        if (!updatedUser) {
          result.failed++;
          result.errors.push(`User with ID ${updateItem.id} not found`);
          continue;
        }

        result.success++;
        result.successfulIds.push(updatedUser._id.toString());
      } catch (error) {
        result.failed++;
        result.errors.push(`Failed to update user ${updateItem.id}: ${error.message}`);
      }
    }

    return result;
  }

  async bulkDelete(bulkDeleteUserDto: BulkDeleteUserDto): Promise<BulkOperationResult> {
    const result: BulkOperationResult = {
      success: 0,
      failed: 0,
      total: bulkDeleteUserDto.ids.length,
      errors: [],
      successfulIds: []
    };

    for (const id of bulkDeleteUserDto.ids) {
      try {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        
        if (!deletedUser) {
          result.failed++;
          result.errors.push(`User with ID ${id} not found`);
          continue;
        }

        result.success++;
        result.successfulIds.push(id);
      } catch (error) {
        result.failed++;
        result.errors.push(`Failed to delete user ${id}: ${error.message}`);
      }
    }

    return result;
  }
}