import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors";
import { verifyAccessToken } from "../../helpers/jwt";
import { notAccepted, unAuthorized } from "../../helpers/responseHandler";
import { getUser } from "../user/user_service";

interface MyRequest extends Request {
    userId: string;
    user: object;
    email: string;
    name: string;
}
export const authorization = (roles: string[]): any => {

    return async (req: MyRequest, res: Response, next: NextFunction) => {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) throw new ApiError(notAccepted(), "Token is not provided");
        const decode = verifyAccessToken(token);
        const user = await getUser({ _id: decode.id });

        if (!decode.role) {
            throw new ApiError(unAuthorized(), "Invalid Token");
        }
        if (!roles.includes(decode.role)) {
            throw new ApiError(unAuthorized(), "You are not authorized to access this route");
        }

        // bind user to res.locals
        res.locals["user"] = user;

        next();
    };

};