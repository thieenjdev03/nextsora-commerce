import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true, versionKey: false })
export class Product {
  @Transform(({ obj }) => obj._id.toString())
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  categoryId: string;

  @Prop({ default: 'draft', enum: ['draft', 'active', 'archived'] })
  status: string;

  @Prop({ required: true, unique: true })
  sku: string;

  @Prop({ default: null })
  brand?: string | null;

  @Prop({ default: 0 })
  price: number;

  @Prop({ default: 0 })
  compareAtPrice: number;

  @Prop({ default: 0 })
  taxPercent: number;

  @Prop({ default: 0 })
  stockQty: number;

  @Prop({ default: false })
  trackInventory: boolean;

  @Prop({ default: 0 })
  lowStockThreshold: number;

  @Prop({ default: null })
  mainImage?: string | null;

  @Prop({ type: [String], default: [] })
  gallery?: string[];

  // Dynamic attribute values: { [attributeCode]: value }
  @Prop({ type: Object, default: {} })
  attributes: Record<string, any>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ slug: 1 }, { unique: true });
ProductSchema.index({ sku: 1 }, { unique: true });
