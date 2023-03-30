"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorConverter = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ApiError_1 = __importDefault(require("./ApiError"));
const errorConverter = (err, _req, _res, next) => {
    let error = err;
    if (!(error instanceof ApiError_1.default)) {
        const statusCode = error.statusCode || (error instanceof mongoose_1.default.Error ? 400 : 500);
        const message = error.message || "bad request error or internal server error";
        error = new ApiError_1.default(statusCode, message, false, err.stack);
        // error = new ApiError(statusCode, message, false);
    }
    next(error);
};
exports.errorConverter = errorConverter;
const errorHandler = (err, _req, res, _next) => {
    let { statusCode, message } = err;
    if (!err.isOperational) {
        statusCode = 500; // INTERNAL_SERVER_ERROR
        message = "Internal Server Error";
    }
    const response = Object.assign({ success: false, code: statusCode, message }, { stack: err.stack });
    res.status(statusCode).send(response);
};
exports.errorHandler = errorHandler;
