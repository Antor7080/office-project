import { NextFunction, Request, Response } from "express";
import Joi from "joi";
const userSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().pattern(new RegExp('^[0-9]{11}$')).required(),
    password: Joi.string().min(6).required(),
    status: Joi.string().valid('Active', 'Inactive').required(),
    role: Joi.string().valid("Admin", "Farmer", "SuperVisor").required()
});

const userValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default userValidator;