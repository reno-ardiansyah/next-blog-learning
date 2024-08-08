import { NextRequest, NextResponse } from "next/server";
import { Category } from "../models/Category";
import connectDB from "@/libs/db";
import { mongo_url } from "../../../constant";
import slugify from "slugify";

export const getCategories = async (request: NextRequest) => {
  try {
    await connectDB(mongo_url);
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const createCategory = async (request: NextRequest) => {
  try {
    await connectDB(mongo_url);
    const categoryData = await request.json();
    const { title } = categoryData;

    const newCategory = new Category({
      title,
      slug: slugify(title, { lower: true, strict: true }),
    });

    await newCategory.save();
    return new NextResponse(JSON.stringify(newCategory), { status: 201 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const getCategory = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    await connectDB(mongo_url);
    const category = await Category.findOne({ slug: params.slug });
    if (!category) {
      return new NextResponse("Category not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const updateCategory = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    await connectDB(mongo_url);
    const categoryData = await request.json();
    const category = await Category.findOneAndUpdate(
      { slug: params.slug },
      categoryData,
      { new: true }
    );
    if (!category) {
      return new NextResponse("Category not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const deleteCategory = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    await connectDB(mongo_url);
    const category = await Category.findOneAndDelete({ slug: params.slug });
    if (!category) {
      return new NextResponse("Category not found", { status: 404 });
    }
    return new NextResponse("Category deleted successfully", { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
