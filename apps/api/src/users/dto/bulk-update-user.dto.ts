import { IsArray, ValidateNested, ArrayMinSize, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateUserDto } from './update-user.dto';

export class BulkUpdateUserItem {
  @ApiProperty({
    description: 'User ID to update',
    example: '60d5ecb74f3b8f001f8e4567'
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: UpdateUserDto,
    description: 'User data to update'
  })
  @ValidateNested()
  @Type(() => UpdateUserDto)
  data: UpdateUserDto;
}

export class BulkUpdateUserDto {
  @ApiProperty({
    type: [BulkUpdateUserItem],
    description: 'Array of users to update',
    example: [
      {
        id: '60d5ecb74f3b8f001f8e4567',
        data: {
          firstName: 'John Updated',
          lastName: 'Doe Updated'
        }
      },
      {
        id: '60d5ecb74f3b8f001f8e4568',
        data: {
          email: 'updated@example.com'
        }
      }
    ]
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one user update is required' })
  @ValidateNested({ each: true })
  @Type(() => BulkUpdateUserItem)
  users: BulkUpdateUserItem[];
}