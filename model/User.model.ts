import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
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

export interface User extends Document {
  username: string;
  email: string;
  passwrod: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is a required feild!"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is a required feild!"],
    match: [/.+\@.+\..+/, "Email address is unvalid!"],
  },
  passwrod: {
    type: String,
    required: true,
  },
  verifyCode: {
    type: String,
    required: [true, "Verification code is a required feild!"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is a required feild!"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [messageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
export default UserModel;
