import { NextRequest, NextResponse } from 'next/server';
import { User } from '../models/User';
import { connectToDatabase } from '@/libs/db';
import { parse } from 'date-fns';
import bcrypt from 'bcryptjs';

/**
 * Get all users.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response with the list of users.
 */
export const getUsers = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Create a new user.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response with the created user.
 */
export const createUser = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const userData = await request.json();
    const { avatar, fullname, nickname, dob, email, password, role } = userData;
    const parsedDob = parse(dob, 'yyyy-MM-dd', new Date());
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      avatar,
      fullname,
      nickname,
      dob: parsedDob,
      email,
      password: hashedPassword, 
      role,
    });

    await newUser.save();
    return new NextResponse(JSON.stringify(newUser), { status: 201 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};


/**
 * Get a single user by username.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.username - The user's nickname.
 * @returns {Promise<NextResponse>} - The response with the user.
 */
export const getUser = async (request: NextRequest, { params }: { params: { username: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ nickname: params.username });
    
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Update a user by username.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.username - The user's nickname.
 * @returns {Promise<NextResponse>} - The response with the updated user.
 */
export const updateUser = async (request: NextRequest, { params }: { params: { username: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const userData = await request.json();
    const user = await User.findOneAndUpdate({ nickname: params.username }, userData, { new: true });
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Delete a user by username.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.username - The user's nickname.
 * @returns {Promise<NextResponse>} - The response confirming deletion.
 */
export const deleteUser = async (request: NextRequest, { params }: { params: { username: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const user = await User.findOneAndDelete({ nickname: params.username });
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }
    return new NextResponse('User deleted successfully', { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * Change a user's role by username.
 * @param {NextRequest} request - The incoming request.
 * @param {Object} params - The request parameters.
 * @param {string} params.username - The user's nickname.
 * @returns {Promise<NextResponse>} - The response confirming role change.
 */
export const changeUserRole = async (request: NextRequest, { params }: { params: { username: string } }): Promise<NextResponse> => {
  try {
    await connectToDatabase();
    const { role } = await request.json();
    const user = await User.findOneAndUpdate({ nickname: params.username }, { role }, { new: true });
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
