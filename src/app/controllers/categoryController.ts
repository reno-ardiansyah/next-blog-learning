import { NextRequest, NextResponse } from 'next/server';
import { Category } from '@/app/models/Category';
import { connectToDatabase } from '@/libs/db';
import slugify from 'slugify';

/**
 * Get all categories.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response with the list of categories.
 */
export const getCategories = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Create a new category.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response with the created category.
 */
export const createCategory = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDatabase();
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
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Get a single category by slug.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.slug - The category slug.
 * @returns {Promise<NextResponse>} - The response with the category.
 */
export const getCategory = async (request: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const category = await Category.findOne({ slug: params.slug });
    if (!category) {
      return new NextResponse('Category not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Update a category by slug.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.slug - The category slug.
 * @returns {Promise<NextResponse>} - The response with the updated category.
 */
export const updateCategory = async (request: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const categoryData = await request.json();
    const category = await Category.findOneAndUpdate(
      { slug: params.slug },
      categoryData,
      { new: true }
    );
    if (!category) {
      return new NextResponse('Category not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(category), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Delete a category by slug.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.slug - The category slug.
 * @returns {Promise<NextResponse>} - The response confirming deletion.
 */
export const deleteCategory = async (request: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const category = await Category.findOneAndDelete({ slug: params.slug });
    if (!category) {
      return new NextResponse('Category not found', { status: 404 });
    }
    return new NextResponse('Category deleted successfully', { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
