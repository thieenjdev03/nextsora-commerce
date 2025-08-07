import { IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class BulkCreateUserDto {
  @ApiProperty({
    type: [CreateUserDto],
    description: 'Array of users to create',
    example: [
      {
        email: 'user1@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        email: 'user2@example.com',
        password: 'password456',
        firstName: 'Jane',
        lastName: 'Smith'
      }
    ]
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one user is required' })
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  users: CreateUserDto[];
}