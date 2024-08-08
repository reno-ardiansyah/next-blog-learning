import mongoose, { model, models, Schema } from "mongoose";
import { BlogInterface } from "../types";
import slugify from "slugify";

const blogSchema = new Schema<BlogInterface>({
  title: {
    type: String,
    required: [true, 'Title Tidak Boleh Kosong']
  },
  slug: {
    type: String,
    required: true,
    default: ''
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, 'Author Tidak Boleh Kosong']
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, 'Category Tidak Boleh Kosong']
  },
  description: {
    type: String,
    required: [true, 'Description Tidak Boleh Kosong']
  },
  imageUrl: {
    type: String,
    default: ''
  },
}, {timestamps: true});

blogSchema.pre('save', function(next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const Blog = models.Blog || model<BlogInterface>('Blog', blogSchema);
