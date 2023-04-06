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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const errors_1 = require("../../errors");
const jwt_1 = require("../../helpers/jwt");
const responseHandler_1 = require("../../helpers/responseHandler");
const user_service_1 = require("../user/user_service");
const authorization = (roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token)
            throw new errors_1.ApiError((0, responseHandler_1.notAccepted)(), "Token is not provided");
        const decode = (0, jwt_1.verifyAccessToken)(token);
        const user = yield (0, user_service_1.getUser)({ _id: decode.id });
        if (!decode.role) {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), "Invalid Token");
        }
        if (!roles.includes(decode.role)) {
            throw new errors_1.ApiError((0, responseHandler_1.unAuthorized)(), "You are not authorized to access this route");
        }
        // bind user to res.locals
        res.locals["user"] = user;
        next();
    });
};
exports.authorization = authorization;
