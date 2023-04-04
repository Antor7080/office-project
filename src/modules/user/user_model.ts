import { Schema, model } from "mongoose";
import { IUser } from "./user_interface";

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
    },
    role: {
        type: String,
        enum: ["Admin", "Farmer", "SuperVisor"],
    },
}, { timestamps: true });

const User = model<IUser>("User", UserSchema);
export default User;