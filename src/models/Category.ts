import mongoose, { Schema, Document, Types, Model } from 'mongoose';

// Interface for the Category document
interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
  parentCategory?: Types.ObjectId | ICategory;
  vendor?: Types.ObjectId;
  createdAt: Date;
}

// Define the Category schema
const categorySchema: Schema = new Schema<ICategory>({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    trim: true,
    unique: true,
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    trim: true,
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  vendor: {
    type: Schema.Types.ObjectId,
    ref: 'Vendor',
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for faster queries on slug and vendor
categorySchema.index({ slug: 1, vendor: 1 });

// Check if the model already exists before compiling
export const Category = mongoose.models.category || mongoose.model<ICategory>('category', categorySchema);

export default Category
