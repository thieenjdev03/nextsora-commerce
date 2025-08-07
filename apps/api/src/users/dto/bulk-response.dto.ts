import { ApiProperty } from '@nestjs/swagger';

export class BulkOperationResult {
  @ApiProperty({
    description: 'Number of successful operations',
    example: 5
  })
  success: number;

  @ApiProperty({
    description: 'Number of failed operations',
    example: 1
  })
  failed: number;

  @ApiProperty({
    description: 'Total number of operations attempted',
    example: 6
  })
  total: number;

  @ApiProperty({
    description: 'Array of error messages for failed operations',
    example: ['User with email user@example.com already exists']
  })
  errors: string[];

  @ApiProperty({
    description: 'Array of successfully created/updated/deleted IDs',
    example: ['60d5ecb74f3b8f001f8e4567', '60d5ecb74f3b8f001f8e4568']
  })
  successfulIds: string[];
}