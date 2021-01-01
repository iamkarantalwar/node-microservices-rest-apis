import mongoose from 'mongoose';

export interface UserModel extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    username: string;
    address: string;
}