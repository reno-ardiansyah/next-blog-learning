import { NextRequest, NextResponse } from 'next/server';
import { getBlogs, createBlog } from '../../controllers/blogController';

export async function GET(request: NextRequest) {
  try {
    return await getBlogs(request);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    return await createBlog(request);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
