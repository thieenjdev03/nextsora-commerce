import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AttributesService } from './attributes.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@ApiTags('Attributes')
@ApiBearerAuth()
@Controller('attributes')
export class AttributesController {
  constructor(private readonly attributesService: AttributesService) {}

  @Post()
  @ApiOperation({ summary: 'Create attribute' })
  create(@Body() dto: CreateAttributeDto) {
    return this.attributesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List attributes (optionally by categoryId)' })
  findAll(@Query('categoryId') categoryId?: string) {
    return this.attributesService.findAll(categoryId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an attribute' })
  findOne(@Param('id') id: string) {
    return this.attributesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an attribute' })
  update(@Param('id') id: string, @Body() dto: UpdateAttributeDto) {
    return this.attributesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an attribute' })
  remove(@Param('id') id: string) {
    return this.attributesService.remove(id);
  }
}
