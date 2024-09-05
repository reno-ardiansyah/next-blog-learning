import { model, models, Schema } from "mongoose";
import { UserInterface } from "../types";
import bcrypt from 'bcryptjs';

const UserSchema = new Schema<UserInterface>({
  avatar: {
    type: String,
    default: ''
  },
  fullname: {
    type: String,
    required: true,
    default: ''
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
    default: ''
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'User'
  },
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = models.User || model<UserInterface>('User', UserSchema);
