import { Request, Response, NextFunction } from "express";

const ENVIRONMENT = process.env.NODE_ENV;

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction): void => {
  const error = String(err).split(":")[1]?.trim() || "Unknown error";
  console.log(err);

  // Determine the status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  if (ENVIRONMENT === "development") {
    res.status(statusCode).json({
      success: false,
      error,
    });
  } else {
    // Handle production error with a generic message
    const productionError = statusCode === 500 ? "Internal Server Error" : error;
    res.status(200).json({
      success: false,
      error: productionError,
    });
  }
};
