import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getSenderOrders = (req: Request, res: Response) => {
  const id = req.params.id;

  // 1) check if the sender alread exsit

  // 2) finds all order associated with the sender and return

  return res.status(StatusCodes.OK).json([]);
};

export const addOrder = (req: Request, res: Response) => {
  const { senderID } = req.body;

  // 1) check if the sender alread exsit

  // 2) finds all order associated with the sender and return

  return res.status(StatusCodes.OK).json([]);
};

export const getAvailableOrders = (req: Request, res: Response) => {
  // 1)  find the available orders

  // 2) finds all order associated with the sender and return

  return res.status(StatusCodes.OK).json([]);
};

export const claimOrder = (req: Request, res: Response) => {
  const { bikerID, orderID } = req.body;

  // check if both exists

  // 1) check if check if the order is still available

  // 2) if yes make it in process and give it the initali pickof time.

  return res.status(StatusCodes.OK).json({
    message: "Successful Operation",
  });
};

export const deliverOrder = (req: Request, res: Response) => {
  const { bikerID, orderID, delivery_at } = req.body;

  // check if both exists

  // 1) change the the status for the order and make it deliverd

  return res.status(StatusCodes.OK).json({
    message: "Successful Operation",
  });
};
