import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsIn } from 'class-validator';

export class OptimizeUrlDto {
  @ApiProperty({
    description: 'Image URL to optimize',
    example: 'https://res.cloudinary.com/example/image/upload/v1234567/sample.jpg',
  })
  @IsString()
  url: string;

  @ApiProperty({
    description: 'Width in pixels',
    example: 800,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  width?: number;

  @ApiProperty({
    description: 'Height in pixels',
    example: 600,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  height?: number;

  @ApiProperty({
    description: 'Image quality',
    example: 'auto:good',
    required: false,
  })
  @IsOptional()
  @IsString()
  quality?: string;

  @ApiProperty({
    description: 'Image format',
    example: 'auto',
    required: false,
  })
  @IsOptional()
  @IsString()
  format?: string;
} 