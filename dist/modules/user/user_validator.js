"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    phone: joi_1.default.string().pattern(new RegExp('^[0-9]{11}$')).required(),
    password: joi_1.default.string().min(6).required(),
    status: joi_1.default.string().valid('Active', 'Inactive').required(),
    role: joi_1.default.string().valid("Admin", "Farmer", "SuperVisor").required()
});
const userValidator = (req, res, next) => {
    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            next(error);
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = userValidator;
