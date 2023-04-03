"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unProcessable = exports.responseHandler = exports.notFound = exports.internalServerError = void 0;
const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const UNPROCESSABLE = 422;
const INTERNAL_SERVER_ERROR = 500;
const notFound = () => {
    return NOT_FOUND;
};
exports.notFound = notFound;
const unProcessable = () => {
    return UNPROCESSABLE;
};
exports.unProcessable = unProcessable;
const internalServerError = () => {
    return INTERNAL_SERVER_ERROR;
};
exports.internalServerError = internalServerError;
// response handler middleware
const responseHandler = (req, res, next) => {
    // return success response
    const success = (statusCode, data, message) => {
        const code = statusCode < 400 ? statusCode : OK;
        return res.status(statusCode).send({
            success: true,
            code: code,
            data: data,
            message: message || "Successfully Done",
        });
    };
    const falsy = (statusCode, data, message) => {
        const code = statusCode < 400 ? statusCode : OK;
        return res.status(statusCode).send({
            success: false,
            code: code,
            data: data,
            message: message || "False",
        });
    };
    // return fail response
    const error = (statusCode, message) => {
        console.log("error", statusCode, message);
        const code = statusCode >= 400 && statusCode < 500 ? statusCode : BAD_REQUEST;
        return res.status(statusCode).send({
            success: false,
            code: code,
            message: message || "Failed",
        });
    };
    // for sending ok operation
    res.ok = (data, message) => {
        return success(OK, data, message || "OK");
    };
    res.okFalse = (data, message) => {
        return falsy(OK, data, message || "OK but False");
    };
    // for sending created operation
    res.created = (data, message) => {
        return success(CREATED, data, message || "Successfully Created.");
    };
    // for sending failed operation
    res.unprocessable = (message) => {
        return error(NOT_FOUND, message || "Unprocessable!");
    };
    res.notFound = (message) => {
        console.log("Not Found");
        return error(NOT_FOUND, message || "Not Found!");
    };
    res.internalServerError = (message) => {
        console.log("Internal Server Error");
        return error(INTERNAL_SERVER_ERROR, message || "Internal Server Error");
    };
    next();
};
exports.responseHandler = responseHandler;
