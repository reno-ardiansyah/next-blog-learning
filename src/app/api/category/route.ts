import { NextRequest, NextResponse } from 'next/server';
import { getCategories, createCategory } from '../../controllers/categoryController';

export async function GET(request: NextRequest) {
  try {
    return await getCategories(request);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    return await createCategory(request);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
