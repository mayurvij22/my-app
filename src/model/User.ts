import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: String;
  createdAt: Date;
}

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptanceMessage: boolean;
  messages: Message[];
}
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [/.+@.+\..+/, "please use a valid email address"],
  },

  password: {
    type: String,
    required: [true, "Password  is required"],
    unique: true,
  },
  verifyCode: {
    type: String,
    required: [true, " Verifycode is required"],
    unique: true,
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, " Verifycode is required"],
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptanceMessage: { type: Boolean, default: true },
  messages: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
