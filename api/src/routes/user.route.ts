import express from "express";
import { verifyToken } from "../controllers/auth.controller/login/jwt.handler";
import { getAllUsers, getUser, updateUser } from "../controllers/user.controller/user.controller";
const router = express.Router();

router.get("/getAllUsers", verifyToken, getAllUsers);
router.get("/getUser", verifyToken, getUser);
router.patch("/updateUser", verifyToken, updateUser);


export default router;