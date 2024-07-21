import express from "express";
import dotenv from "dotenv";
import prisma from "../prisma/prisma";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
  };
app.use(cors(corsOptions))
dotenv.config();

import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import accountRoute from "./routes/account.route";

app.use("/api/v1", authRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", accountRoute);

app.listen(3001, ()=>{
    console.log("server started")
})