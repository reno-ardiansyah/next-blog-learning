import { NextRequest } from 'next/server';
import { getBlog, updateBlog, deleteBlog } from '../../../controllers/blogController';

export async function GET(request: NextRequest, context: { params: { slug: string } }) {
  return getBlog(request, context);
}

export async function PUT(request: NextRequest, context: { params: { slug: string } }) {
  return updateBlog(request, context);
}

export async function DELETE(request: NextRequest, context: { params: { slug: string } }) {
  return deleteBlog(request, context);
}
