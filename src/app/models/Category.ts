import { model, models, Schema } from "mongoose";
import { CategoryInterface } from "../types";
import slugify from "slugify";

const CategorySchema = new Schema<CategoryInterface>({
  title: {
    type: String,
    required: [true, 'Title Tidak Boleh Kosong']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: ''
  }
}, {timestamps: true});

CategorySchema.pre('save', function(next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const Category = models.Category || model<CategoryInterface>('Category', CategorySchema);
