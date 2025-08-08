import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UploadFileDto {
  @ApiProperty({
    description: 'Folder name for organizing files',
    example: 'products',
    required: false,
  })
  @IsOptional()
  @IsString()
  folder?: string;
} 