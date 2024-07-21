import express from "express";
import { verifyToken } from "../controllers/auth.controller/login/jwt.handler";
import { createAccount } from "../controllers/accounts.controller/account.controller";
const router = express();

router.post("/createAccount", verifyToken, createAccount);

export default router;