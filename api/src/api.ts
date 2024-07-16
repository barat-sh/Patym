import express from "express";
import dotenv from "dotenv";
import prisma from "../prisma/prisma";
const app = express();
app.use(express.json());
dotenv.config();

// app.get("/", async(req,res)=>{
//     console.log(process.env.DATABASE_URL)
//     await prisma.user.create({
//         data:{
//             name: "Barath",
//             email: "barath0121@gmail.com",
//             password : "itunes@1921"
//         }
//     })
//     res.send()
// })

import userRoute from "./routes/user.route";

app.use("/api", userRoute)

app.listen(3001, ()=>{
    console.log("server started")
})