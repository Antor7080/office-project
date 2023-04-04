import { IUser } from "./user_interface";
import User from "./user_model";

export const createUser = async (user: IUser): Promise<IUser> => {
    const newUser = new User(user);
    return await newUser.save();
};

export const getUser = async (info: object): Promise<IUser | null> => {
    return await User.findOne(info);
};

export const getAllUser = async (): Promise<IUser[]> => {
    return await User.find();
}