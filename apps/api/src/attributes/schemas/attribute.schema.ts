import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Transform } from 'class-transformer';

export type AttributeDocument = HydratedDocument<Attribute>;

export type AttributeType = 'text' | 'number' | 'select' | 'multiselect' | 'boolean';

@Schema({ timestamps: true, versionKey: false })
export class Attribute {
  @Transform(({ obj }) => obj._id.toString())
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string; // unique identifier used in products

  @Prop({ required: true, enum: ['text', 'number', 'select', 'multiselect', 'boolean'] })
  type: AttributeType;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  categoryId: string;

  @Prop({ default: false })
  required: boolean;

  @Prop({ default: null })
  unit?: string | null;

  @Prop({ type: [String], default: [] })
  options?: string[]; // used for (multi)select

  @Prop({ default: 0 })
  sortOrder: number;
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);

AttributeSchema.index({ code: 1 }, { unique: true });
AttributeSchema.index({ categoryId: 1, sortOrder: 1 });
