import { NextRequest } from 'next/server';
import { getUser, updateUser, deleteUser } from '@/app/controllers/userController';

export const GET = async (request: NextRequest, context: { params: { username: string} }) => getUser(request, context);
export const PUT = async (request: NextRequest, context: { params: { username: string} }) => updateUser(request, context);
export const DELETE = async (request: NextRequest, context: { params: { username: string} }) => deleteUser(request, context);