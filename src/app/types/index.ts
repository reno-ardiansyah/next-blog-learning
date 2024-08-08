import mongoose from "mongoose";

export interface BlogInterface {
  title: string;
  author_id: mongoose.Schema.Types.ObjectId;
  category_id: mongoose.Schema.Types.ObjectId;
  description: string;
  imageUrl: string;
  slug: string;
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
//atome interface
export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

export interface CardContentProps {
  title: string;
  author: UserInterface;
  description: string;
  slug?: string;
  imageUrl?: string;
  imageAlt?: string;
}