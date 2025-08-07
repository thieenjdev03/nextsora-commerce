import { IsArray, ArrayMinSize, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BulkDeleteUserDto {
  @ApiProperty({
    type: [String],
    description: 'Array of user IDs to delete',
    example: ['60d5ecb74f3b8f001f8e4567', '60d5ecb74f3b8f001f8e4568']
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one user ID is required' })
  @IsString({ each: true })
  ids: string[];
}