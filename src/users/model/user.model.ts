import mongoose, { Schema, Document } from 'mongoose';

export interface UserModel extends Document {
    name: string;
    email: string;
    password: string;
    username: string;
    address: string;
}

const UserSchema: Schema = new Schema({
    name: {required: true, type: String},
    email: {required: true, type: String},
    password: {required: true, type: String},
    username: {required: true, type: String},
    address: {required: false, type: String},
})

export default mongoose.model<UserModel>('User', UserSchema);