import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const slugExists = await this.productModel.findOne({ slug: dto.slug });
    if (slugExists) throw new ConflictException('Slug already exists');
    const skuExists = await this.productModel.findOne({ sku: dto.sku });
    if (skuExists) throw new ConflictException('SKU already exists');
    const created = new this.productModel(dto);
    return created.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Product> {
    const prod = await this.productModel.findById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    if (dto.slug) {
      const slugExists = await this.productModel.findOne({ slug: dto.slug, _id: { $ne: id } });
      if (slugExists) throw new ConflictException('Slug already exists');
    }
    if (dto.sku) {
      const skuExists = await this.productModel.findOne({ sku: dto.sku, _id: { $ne: id } });
      if (skuExists) throw new ConflictException('SKU already exists');
    }
    const updated = await this.productModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Product not found');
    return updated;
  }

  async remove(id: string): Promise<void> {
    const res = await this.productModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Product not found');
  }
}
