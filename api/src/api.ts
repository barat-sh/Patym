import express from "express";
import dotenv from "dotenv";
import prisma from "../prisma/prisma";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();

import userRoute from "./routes/auth.route";

app.use("/api/v1", userRoute)

app.listen(3001, ()=>{
    console.log("server started")
})