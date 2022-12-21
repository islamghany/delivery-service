import { generateToken } from "./../helpers/token";
import { Biker } from "../db/entity/Bikers";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { bikerRepository } from "../db";
import {
  invalidCredentialsResponse,
  serverErrorResponse,
} from "../helpers/errors";

export const bikerLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input = req.body;

  // 1) validate the the biker
  let biker: Biker | null;
  try {
    biker = await bikerRepository.findOne({
      where: {
        email: input.email,
      },
    });

    if (!biker || biker.password !== input.password) {
      return next(invalidCredentialsResponse());
    }
    return res.status(StatusCodes.OK).json({
      token: generateToken({
        id: biker.id,
        email: biker.email,
      }),

      user: {
        id: biker.id,
        email: biker.email,
        name: biker.name,
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
};
