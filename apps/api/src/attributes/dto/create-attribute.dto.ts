import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAttributeDto {
  @ApiProperty({ description: 'Attribute name', example: 'Material' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Unique code', example: 'material' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Type of attribute', enum: ['text', 'number', 'select', 'multiselect', 'boolean'] })
  @IsString()
  @IsIn(['text', 'number', 'select', 'multiselect', 'boolean'])
  type: 'text' | 'number' | 'select' | 'multiselect' | 'boolean';

  @ApiProperty({ description: 'Category ID this attribute belongs to' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ description: 'Is required', default: false, required: false })
  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @ApiProperty({ description: 'Unit (for number)', required: false })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiProperty({ description: 'Options (for select/multiselect)', required: false, type: [String] })
  @IsOptional()
  @IsArray()
  options?: string[];

  @ApiProperty({ description: 'Sort order', default: 0, required: false })
  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}
