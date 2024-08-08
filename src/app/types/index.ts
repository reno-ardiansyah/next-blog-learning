import mongoose from "mongoose";

export interface BlogInterface {
  title: string;
  author_id: mongoose.Schema.Types.ObjectId;
  category_id: mongoose.Schema.Types.ObjectId;
  description: string;
  imageUrl: string;
}


export interface CategoryInterface {
  title: string,
  slug: string,
}

export interface UserInterface {
  avatar: string,
  fullname: string,
  nickname: string,
  dob: Date,
  email: string,
  password: string,
}