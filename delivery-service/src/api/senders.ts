import { senderRepository } from "../db";
import {
  authenticationRequiredResponse,
  invalidCredentialsResponse,
  serverErrorResponse,
} from "../helpers/errors";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Sender } from "../db/entity/Sender";
import { generateToken } from "../helpers/token";

export const senderLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input = req.body;

  // 1) validate the the sender
  let sender: Sender | null;
  try {
    sender = await senderRepository.findOne({
      where: {
        email: input.email,
      },
    });

    if (!sender || sender.password !== input.password) {
      return next(invalidCredentialsResponse());
    }
    return res.status(StatusCodes.OK).json({
      token: generateToken({
        id: sender.id,
        email: sender.email,
      }),

      user: {
        id: sender.id,
        email: sender.email,
        name: sender.name,
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
};
