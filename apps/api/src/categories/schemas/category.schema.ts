import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true, versionKey: false })
export class Category {
  @Transform(({ obj }) => obj._id.toString())
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', default: null })
  parentId?: string | null;

  @Prop({ default: true })
  isVisible: boolean;

  @Prop({ default: 0 })
  sortOrder: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.index({ slug: 1 }, { unique: true });
CategorySchema.index({ parentId: 1, sortOrder: 1 });
