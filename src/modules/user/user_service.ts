import { IUser } from "./user_interface";
import User from "./user_model";


/**
 * @objective add new user
 * @param user 
 * @returns 
 */
export const createUser = async (user: IUser): Promise<IUser> => {
    const newUser = new User(user);
    return await newUser.save();
};

/**
 * @objective get one user
 * @param info 
 * @returns 
 */
export const getUser = async (info: object): Promise<IUser | null> => {
    return await User.findOne(info);
};


/**
 * @objective get all user
 * @returns 
 */
export const getAllUser = async (): Promise<IUser[]> => {
    return await User.find();
};


/**
 *
 * @param _id
 * @param updateBody
 * @param auditTrails
 * @returns
 */
export const updateById = async (_id: string, updateBody: IUser,) => {
    return User.findByIdAndUpdate(_id, {
        $set: {
            ...updateBody,
        },
    },
        { new: true }
    )
};
