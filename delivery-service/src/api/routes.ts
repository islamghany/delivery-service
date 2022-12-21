import { Router } from "express";
import { checkAuth, protectedRoute } from "./middlewares";
import {
  addOrder,
  claimOrder,
  deliverOrder,
  getAvailableOrders,
  getSenderOrders,
} from "./orders";
import { senderLogin } from "./senders";

const router = Router();

router.post("/login/sender", senderLogin);

router.post("/login/biker", () => {});

router.get(
  "/sender/:id/orders",
  checkAuth,
  protectedRoute("SENDER"),
  getSenderOrders
);
router.post("/orders", addOrder);
router.get("/orders/available", getAvailableOrders);
router.patch("/orders/claim", claimOrder);
router.patch("/orders/deliver", deliverOrder);

export default router;
