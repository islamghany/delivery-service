import { bikerLogin, claimOrder, deliverOrder } from "./bikers";
import { Router } from "express";
import { checkAuth, protectedRoute } from "./middlewares";
import {
  addOrder,
  getIdleOrders,
  getSenderOrders,
  getToDoOrdersForBiker,
} from "./orders";
import { senderLogin } from "./senders";

const router = Router();

router.post("/sender/login", senderLogin);

router.post("/biker/login", bikerLogin);

router.post("/orders", checkAuth, protectedRoute("SENDER"), addOrder);

router.get(
  "/orders/sender",
  checkAuth,
  protectedRoute("SENDER"),
  getSenderOrders
);

router.get(
  "/orders/biker/in-process",
  checkAuth,
  protectedRoute("BIKER"),
  getToDoOrdersForBiker
);

router.get(
  "/orders/biker/idle",
  checkAuth,
  protectedRoute("BIKER"),
  getIdleOrders
);

router.patch(
  "/orders/:id/claim",
  checkAuth,
  protectedRoute("BIKER"),
  claimOrder
);

router.patch(
  "/orders/:id/deliver",
  checkAuth,
  protectedRoute("BIKER"),
  deliverOrder
);

export default router;
