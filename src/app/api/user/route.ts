import { createUser, getUsers } from '@/app/controllers/userController';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => getUsers(request); 
export const POST = async (request: NextRequest) => createUser(request);