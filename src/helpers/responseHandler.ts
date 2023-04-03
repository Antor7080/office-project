import { NextFunction, Request, Response } from "express";

const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const UNPROCESSABLE = 422;
const INTERNAL_SERVER_ERROR = 500;

const notFound = () => {
  return NOT_FOUND;
};


const unProcessable = () => {
  return UNPROCESSABLE;
};
const internalServerError = () => {
  return INTERNAL_SERVER_ERROR;
};


// modified express Response types
declare module "express-serve-static-core" {
  interface Response {
    ok(data: any, message?: string): Response;
    okFalse(data: any, message?: string): Response;
    created(data: any, message?: string): Response;
    notFound(message?: string): Response;
    unprocessable(message?: string): Response;
    internalServerError(message?: string): Response;
  }
}

// response handler middleware
const responseHandler = (req: Request, res: Response, next: NextFunction) => {

  // return success response
  const success = (statusCode: number, data: any, message?: string) => {
    const code: number = statusCode < 400 ? statusCode : OK;
    return res.status(statusCode).send({
      success: true,
      code: code,
      data: data,
      message: message || "Successfully Done",
    });
  };

  const falsy = (statusCode: number, data: any, message?: string) => {
    const code: number = statusCode < 400 ? statusCode : OK;

    return res.status(statusCode).send({
      success: false,
      code: code,
      data: data,
      message: message || "False",
    });
  };

  // return fail response
  const error = (statusCode: number, message?: string) => {
    console.log("error", statusCode, message);
    const code: number = statusCode >= 400 && statusCode < 500 ? statusCode : BAD_REQUEST;

    return res.status(statusCode).send({
      success: false,
      code: code,
      message: message || "Failed",
    });
  };

  // for sending ok operation
  res.ok = (data: any, message?: string) => {
    return success(OK, data, message || "OK");
  };

  res.okFalse = (data: any, message?: string) => {
    return falsy(OK, data, message || "OK but False");
  };

  // for sending created operation
  res.created = (data: any, message?: string) => {
    return success(CREATED, data, message || "Successfully Created.");
  };


  // for sending failed operation

  res.unprocessable = (message?: string) => {
    return error(NOT_FOUND, message || "Unprocessable!");
  };

  res.notFound = (message?: string) => {
    console.log("Not Found");
    return error(NOT_FOUND, message || "Not Found!");
  };

  res.internalServerError = (message?: string) => {
    console.log("Internal Server Error");
    return error(INTERNAL_SERVER_ERROR, message || "Internal Server Error");
  };
  next();
};

export {
  internalServerError, notFound, responseHandler, unProcessable
};

