import mongoose, { model, models, Schema } from "mongoose";
import { BlogInterface } from "../types";

const blogSchema = new Schema<BlogInterface>({
  title: {
    type: String,
    required: [true, 'Title Tidak Boleh Kosong']
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

export const Blog = models.Blog || model<BlogInterface>('Blog', blogSchema);
