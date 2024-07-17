import express from "express";
const router = express.Router()
import { signup } from "../controllers/auth.controller/signup/signup.controller";
import { login } from "../controllers/auth.controller/login/login.controller";
import { getuser } from "../controllers/auth.controller/login/login.controller";
import { verifyToken } from "../controllers/auth.controller/login/jwt.handler";

router.post("/signup", signup);
router.post("/login", login)

router.get("/user", verifyToken, getuser);

export default router;