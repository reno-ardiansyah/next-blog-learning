import { NextRequest, NextResponse } from 'next/server';
import { Blog } from '../models/Blog';
import connectDB from '@/libs/db';
import { mongo_url } from '../../../constant';

export const getBlogs = async (request: NextRequest) => {
  try {
    await connectDB(mongo_url);
    const blogs = await Blog.find().populate('author_id').populate('category_id');
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

export const createBlog = async (request: NextRequest) => {
  try {
    await connectDB(mongo_url);
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

export const getBlog = async (request: NextRequest, { params }: { params: { slug: string } }) => {
  try {
    await connectDB(mongo_url);
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

export const updateBlog = async (request: NextRequest, { params }: { params: { slug: string } }) => {
  try {
    await connectDB(mongo_url);
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

export const deleteBlog = async (request: NextRequest, { params }: { params: { slug: string } }) => {
  try {
    await connectDB(mongo_url);
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
