import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Transform } from "class-transformer";

export type UserDocument = User & Document;

@Schema({
  timestamps: true, // Automatically adds createdAt and updatedAt
  versionKey: false, // Disable __v field
})
export class User {
  @Transform(({ obj }) => obj._id.toString())
  _id: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false }) // Exclude password by default
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  avatar?: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: "user", enum: ["user", "admin", "moderator"] })
  role: string;

  @Prop({ select: false, default: null })
  refreshTokenHash?: string | null;

  @Prop({ default: 0 })
  tokenVersion: number;

  // Virtual properties
  get id(): string {
    return this._id;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add virtual for id
UserSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Add virtual for fullName
UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Ensure virtual fields are serialized
UserSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});
