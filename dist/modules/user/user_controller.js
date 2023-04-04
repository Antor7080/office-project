"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserController = exports.getUserController = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../../errors");
const responseHandler_1 = require("../../helpers/responseHandler");
const user_service_1 = require("./user_service");
const user_res_transformar_1 = require("./user_res_transformar");
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
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phone, password, status, role } = req.body;
        const isExist = yield (0, user_service_1.getUser)({ phone });
        if (isExist) {
            throw new errors_1.ApiError((0, responseHandler_1.unProcessable)(), "User already exist");
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield (0, user_service_1.createUser)({ name, phone, password: hashedPassword, status, role });
        // make a object of user and remove password from it
        const user = (0, user_res_transformar_1.resTransformer)(newUser);
        res.created(user, "User created successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
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
const getUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone } = req.params;
        const user = yield (0, user_service_1.getUser)({ phone });
        if (!user) {
            throw new errors_1.ApiError((0, responseHandler_1.notFound)(), "User not found");
        }
        const user1 = (0, user_res_transformar_1.resTransformer)(user);
        res.ok(user1, "User found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getUserController = getUserController;
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
const getAllUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getAllUser)();
        const transFormUser = (0, user_res_transformar_1.resTransformer)(users);
        res.ok(transFormUser, "Users found successfully");
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUserController = getAllUserController;
