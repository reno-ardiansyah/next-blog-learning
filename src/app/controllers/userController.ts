import { NextRequest, NextResponse } from "next/server";
import { User } from "../models/User";
import { mongo_url } from "../../../constant";
import connectDB from "@/libs/db";
import { parse } from 'date-fns';

export const getUsers = async (request: NextRequest) => {
  try {
    await connectDB(mongo_url);
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const createUser = async (request: NextRequest) => {
  try {
    await connectDB(mongo_url);
    const userData = await request.json();
    const { avatar, fullname, nickname, dob, email, password } = userData;
    const parsedDob = parse(dob, "yyyy-MM-dd", new Date());

    const newUser = new User({
      avatar,
      fullname,
      nickname,
      dob: parsedDob,
      email,
      password,
    });

    await newUser.save();
    return new NextResponse(JSON.stringify(newUser), { status: 201 });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const getUser = async (request: NextRequest, { params }: { params: { username: string } }) => {
  try {
    await connectDB(mongo_url);
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

export const updateUser = async (request: NextRequest, { params }: { params: { username: string } }) => {
  try {
    await connectDB(mongo_url);
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

export const deleteUser = async (request: NextRequest, { params }: { params: { username: string } }) => {
  try {
    await connectDB(mongo_url);
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
