import { NextRequest, NextResponse } from 'next/server';
import { getCategory, updateCategory, deleteCategory } from '../../../controllers/categoryController';

export async function GET(request: NextRequest, context: { params: { slug: string } }) {
  return getCategory(request, context);
}

export async function PUT(request: NextRequest, context: { params: { slug: string } }) {
  return updateCategory(request, context);
}

export async function DELETE(request: NextRequest, context: { params: { slug: string } }) {
  return deleteCategory(request, context);
}
