import { model, models, Schema } from "mongoose";
import { UserInterface } from "../types";

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
  }
}, {timestamps: true});

export const User = models.User || model<UserInterface>('User', UserSchema);
