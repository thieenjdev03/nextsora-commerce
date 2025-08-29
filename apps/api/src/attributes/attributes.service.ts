import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attribute, AttributeDocument } from './schemas/attribute.schema';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Injectable()
export class AttributesService {
  constructor(@InjectModel(Attribute.name) private readonly attributeModel: Model<AttributeDocument>) {}

  async create(dto: CreateAttributeDto): Promise<Attribute> {
    const exists = await this.attributeModel.findOne({ code: dto.code });
    if (exists) throw new ConflictException('Code already exists');
    const created = new this.attributeModel(dto);
    return created.save();
  }

  async findAll(categoryId?: string): Promise<Attribute[]> {
    const filter: any = {};
    if (categoryId) filter.categoryId = categoryId;
    return this.attributeModel.find(filter).sort({ sortOrder: 1, name: 1 }).exec();
  }

  async findOne(id: string): Promise<Attribute> {
    const attr = await this.attributeModel.findById(id);
    if (!attr) throw new NotFoundException('Attribute not found');
    return attr;
  }

  async update(id: string, dto: UpdateAttributeDto): Promise<Attribute> {
    if (dto.code) {
      const exists = await this.attributeModel.findOne({ code: dto.code, _id: { $ne: id } });
      if (exists) throw new ConflictException('Code already exists');
    }
    const updated = await this.attributeModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Attribute not found');
    return updated;
  }

  async remove(id: string): Promise<void> {
    const res = await this.attributeModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Attribute not found');
  }
}
