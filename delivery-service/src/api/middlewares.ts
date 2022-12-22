import { IRequest } from "./../types/index";
import { verifyToken } from "./../helpers/token";
import { NextFunction, Response } from "express";
import {
  authenticationRequiredResponse,
  invalidTokenResponse,
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
    return next(invalidTokenResponse());
  }

  req.user_id = decodedToken?.id;

  return next();
};

export const protectedRoute =
  (role: "BIKER" | "SENDER") =>
  async (req: IRequest, res: Response, next: NextFunction) => {
    if (role === "BIKER" && req.user_id) {
      try {
        const biker = await bikerRepository.findOne({
          where: {
            id: req.user_id,
          },
        });

        if (!biker) {
          return next(authenticationRequiredResponse());
        }

        req.biker = biker;
        return next();
      } catch (err: any) {
        return next(serverErrorResponse(err));
      }
    }
    if (role === "SENDER" && req.user_id) {
      try {
        const sender = await senderRepository.findOne({
          where: {
            id: req.user_id,
          },
        });

        if (!sender) {
          return next(authenticationRequiredResponse());
        }
        req.sender = sender;
        return next();
      } catch (err: any) {
        return next(serverErrorResponse(err));
      }
    }

    return next(authenticationRequiredResponse());
  };
