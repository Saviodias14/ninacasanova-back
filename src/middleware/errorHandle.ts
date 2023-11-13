import { ApplicationError } from "@/protocols";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function handleApplicationErrors(err: Error | ApplicationError, req: Request, res: Response, next: NextFunction) {
    if (err.name === "invalidDataError") {
        return res.status(httpStatus.BAD_REQUEST).send({
            message: err.message,
        });
    }
    if (err.name === "conflictError") {
        return res.status(httpStatus.CONFLICT).send({
            message: err.message,
        });
    }
    if (err.name === "forbidden") {
        return res.status(httpStatus.FORBIDDEN).send({
            message: err.message
        })
    }
    if (err.name === "notFoundError") {
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message,
        });
    }
    console.error(err.name);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
    });
}