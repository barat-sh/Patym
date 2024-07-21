import express, { Request, Response } from "express";
const router = express.Router()
import { signup } from "../controllers/auth.controller/signup/signup.controller";
import { login } from "../controllers/auth.controller/login/login.controller";
import { verifyToken } from "../controllers/auth.controller/login/jwt.handler";
import { logout } from "../controllers/auth.controller/login/logout.controller";

router.get("/status", verifyToken, (req: Request,res:Response)=>{
    res.json({status: true})
} )

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;