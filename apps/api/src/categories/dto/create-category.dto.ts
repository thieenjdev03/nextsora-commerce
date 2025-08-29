import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Category name', example: 'Doors' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Category slug', example: 'doors' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ description: 'Parent category id', required: false })
  @IsOptional()
  @IsString()
  parentId?: string;

  @ApiProperty({ description: 'Visibility', default: true, required: false })
  @IsOptional()
  @IsBoolean()
  isVisible?: boolean;

  @ApiProperty({ description: 'Sort order', default: 0, required: false })
  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}
