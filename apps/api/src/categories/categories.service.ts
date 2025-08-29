import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const exists = await this.categoryModel.findOne({ slug: dto.slug });
    if (exists) throw new ConflictException('Slug already exists');
    const created = new this.categoryModel(dto);
    return created.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().sort({ sortOrder: 1, name: 1 }).exec();
  }

  async findOne(id: string): Promise<Category> {
    const cat = await this.categoryModel.findById(id).exec();
    if (!cat) throw new NotFoundException('Category not found');
    return cat;
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    if (dto.slug) {
      const exists = await this.categoryModel.findOne({ slug: dto.slug, _id: { $ne: id } });
      if (exists) throw new ConflictException('Slug already exists');
    }
    const updated = await this.categoryModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Category not found');
    return updated;
  }

  async remove(id: string): Promise<void> {
    const res = await this.categoryModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Category not found');
  }

  async reorder(idsInOrder: string[]): Promise<void> {
    await Promise.all(
      idsInOrder.map((id, index) => this.categoryModel.findByIdAndUpdate(id, { sortOrder: index }))
    );
  }

  async children(parentId: string | null): Promise<Category[]> {
    return this.categoryModel.find({ parentId: parentId ?? null }).sort({ sortOrder: 1 }).exec();
  }
}
