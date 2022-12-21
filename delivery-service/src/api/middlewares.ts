import { IRequest } from "./../types/index";
import { verifyToken } from "./../helpers/token";
import { NextFunction, Response } from "express";
import {
  authenticationRequiredResponse,
  serverErrorResponse,
} from "../helpers/errors";
import { bikerRepository, senderRepository } from "../db";

export const checkAuth = (req: IRequest, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(" ")[1] || undefined;
  if (!token) {
    return next();
  }

  let decodedToken;

  try {
    decodedToken = verifyToken(token);
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  req.auth = {
    email: decodedToken?.email as string,
    id: decodedToken?.id as number,
  };

  return next();
};

export const protectedRoute =
  (role: "BIKER" | "SENDER") =>
  async (req: IRequest, res: Response, next: NextFunction) => {
    if (role === "BIKER" && req.auth?.id) {
      try {
        const biker = await bikerRepository.findOne({
          where: {
            id: req.auth.id,
          },
        });

        if (!biker) {
          return next(authenticationRequiredResponse());
        }

        return next();
      } catch (err: any) {
        return next(serverErrorResponse(err));
      }
    }
    if (role === "SENDER" && req.auth?.id) {
      try {
        const biker = await senderRepository.findOne({
          where: {
            id: req.auth.id,
          },
        });

        if (!biker) {
          return next(authenticationRequiredResponse());
        }

        return next();
      } catch (err: any) {
        return next(serverErrorResponse(err));
      }
    }

    return next(authenticationRequiredResponse());
  };
