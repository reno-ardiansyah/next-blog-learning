import mongoose from 'mongoose';

const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDB;
