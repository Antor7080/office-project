import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../errors';
import { notFound, unProcessable } from '../../helpers/responseHandler';
import { createUser as addUser, getAllUser, getUser } from './user_service';
import {resTransformer} from "./user_res_transformar"



/**
 * 
    * @objective Add User
    * @endpoint /api/user/signup
    * @method POST
    * @reqbody {
                    "name": "Rahim",
                    "phone": "01986297082",
                    "password": "121212",
                    "role": "Admin",
                    "status": "Active"
                }
    * @res {
                    "success": true,
                    "code": 201,
                    "data": {
                        "name": "Rahim",
                        "phone": "01986297082",
                        "status": "Active",
                        "role": "Admin"
                    },
                    "message": "User created successfully"
                }
 */
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, phone, password, status, role } = req.body;
        const isExist = await getUser({ phone });
        if (isExist) {
            throw new ApiError(unProcessable(), "User already exist");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await addUser({ name, phone, password: hashedPassword, status, role });
       // make a object of user and remove password from it
        const user = resTransformer(newUser);
        res.created(user, "User created successfully");
    } catch (error) {

        next(error);
    }
}


/**
 * 
 * @objective Get User
 * @endpoint /api/user/:phone
 * @method GET
 * @resbody {
                "success": true,
                "code": 200,
                "data": {
                    "_id": "642be2e3327e4d7f3569b195",
                    "phone": "01986297080",
                    "name": "Abdur Rahim",
                    "role": "Admin"
                },
                "message": "User found successfully"
            }
 */
export const getUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { phone } = req.params;
        const user = await getUser({ phone });
        if (!user) {
            throw new ApiError(notFound(), "User not found");
        }
        const user1 = resTransformer(user);
        res.ok(user1, "User found successfully");
    } catch (error) {
        next(error);
    }
}


/** 
 * 
 * @objective Get All User
 * @endpoint /api/user/get-all
 * @method GET
 * @resbody {
    "success": true,
    "code": 200,
    "data": [
        {
            "_id": "642be2e3327e4d7f3569b195",
            "phone": "01986297080",
            "name": "Abdur Rahim",
            "role": "Admin"
        },
        {
            "_id": "642be337cde600e083211ec4",
            "phone": "01986297081",
            "name": "Rahim",
            "role": "Admin"
        },
        {
            "_id": "642be3f2053a5eb08aeade2a",
            "phone": "01986297082",
            "name": "Rahim",
            "role": "Admin"
        }
    ],
    "message": "Users found successfully"
}
*/
export const getAllUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUser();
        const transFormUser= resTransformer(users);
        res.ok(transFormUser, "Users found successfully");

    } catch (error) {
        next(error);
    }
}