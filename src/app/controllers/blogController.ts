import { NextRequest, NextResponse } from 'next/server';
import { Blog } from '@/app/models/Blog';
import { connectToDatabase } from '@/libs/db';

/**
 * Get all blogs.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response with the list of blogs.
 */
export const getBlogs = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const blogs = await Blog.find().populate('author_id').populate('category_id');
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Create a new blog.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response with the created blog.
 */
export const createBlog = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const blogData = await request.json();
    const { title, author_id, category_id, description, imageUrl } = blogData;

    const newBlog = new Blog({
      title,
      author_id,
      category_id,
      description,
      imageUrl,
    });

    await newBlog.save();
    return new NextResponse(JSON.stringify(newBlog), { status: 201 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Get a single blog by ID.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.slug - The blog ID.
 * @returns {Promise<NextResponse>} - The response with the blog.
 */
export const getBlog = async (request: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const blog = await Blog.findById(params.slug).populate('author_id').populate('category_id');
    if (!blog) {
      return new NextResponse('Blog not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Update a blog by ID.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.slug - The blog ID.
 * @returns {Promise<NextResponse>} - The response with the updated blog.
 */
export const updateBlog = async (request: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const blogData = await request.json();
    const blog = await Blog.findByIdAndUpdate(params.slug, blogData, { new: true }).populate('author_id').populate('category_id');
    if (!blog) {
      return new NextResponse('Blog not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Delete a blog by ID.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.slug - The blog ID.
 * @returns {Promise<NextResponse>} - The response confirming deletion.
 */
export const deleteBlog = async (request: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const blog = await Blog.findByIdAndDelete(params.slug);
    if (!blog) {
      return new NextResponse('Blog not found', { status: 404 });
    }
    return new NextResponse('Blog deleted successfully', { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
