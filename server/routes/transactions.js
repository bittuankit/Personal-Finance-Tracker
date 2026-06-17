import express from "express";
import {
  deleteTransactions,
  getTransactions,
  getTransactionsById,
  postTransactions,
  updateTransactions,
} from "../controller/transactions.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/get-transactions", isAuth, getTransactions);
router.get("/get-transactions/:id", isAuth, getTransactionsById);
router.post("/post-transactions", isAuth, postTransactions);
router.put("/update-transactions/:id", isAuth, updateTransactions);
router.delete("/delete-transaction/:id", isAuth, deleteTransactions);

export default router;
