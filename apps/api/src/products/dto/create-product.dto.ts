import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsIn, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name', example: 'Steel Door A1' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Slug', example: 'steel-door-a1' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ description: 'Category ID' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ description: 'Status', default: 'draft', enum: ['draft', 'active', 'archived'] })
  @IsOptional()
  @IsString()
  @IsIn(['draft', 'active', 'archived'])
  status?: string;

  @ApiProperty({ description: 'SKU', example: 'SKU-0001' })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({ description: 'Brand', required: false })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({ description: 'Price', default: 0 })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({ description: 'Compare at price', default: 0 })
  @IsOptional()
  @IsNumber()
  compareAtPrice?: number;

  @ApiProperty({ description: 'Tax percent', default: 0 })
  @IsOptional()
  @IsNumber()
  taxPercent?: number;

  @ApiProperty({ description: 'Stock quantity', default: 0 })
  @IsOptional()
  @IsNumber()
  stockQty?: number;

  @ApiProperty({ description: 'Track inventory', default: false })
  @IsOptional()
  @IsBoolean()
  trackInventory?: boolean;

  @ApiProperty({ description: 'Low stock threshold', default: 0 })
  @IsOptional()
  @IsNumber()
  lowStockThreshold?: number;

  @ApiProperty({ description: 'Main image', required: false })
  @IsOptional()
  @IsString()
  mainImage?: string;

  @ApiProperty({ description: 'Gallery images', required: false, type: [String] })
  @IsOptional()
  @IsArray()
  gallery?: string[];

  @ApiProperty({ description: 'Dynamic attributes', required: false, type: Object })
  @IsOptional()
  @IsObject()
  attributes?: Record<string, any>;
}
