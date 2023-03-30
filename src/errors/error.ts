/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import ApiError from "./ApiError";


export const errorConverter = (
  err: any,
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || (error instanceof mongoose.Error ? 400 : 500);
    const message: string =
      error.message || "bad request error or internal server error";
    error = new ApiError(statusCode, message, false, err.stack);
    // error = new ApiError(statusCode, message, false);
  }
  next(error);
};

export const errorHandler = (
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let { statusCode, message } = err;
  if (!err.isOperational) {
    statusCode = 500; // INTERNAL_SERVER_ERROR
    message = "Internal Server Error";
  }

  const response = {
    success: false,
    code: statusCode,
    message,
    ...{ stack: err.stack },
  };
 

  res.status(statusCode).send(response);
};
