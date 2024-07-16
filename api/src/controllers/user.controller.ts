import { Request, Response } from "express";
import prisma from "../../prisma/prisma";

export const createUser = async(req:Request,res:Response) => {
    const {name, email, password} = req.body;
    try{
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        console.log("New User created")
    }catch{
        res.send("Error while creating User")
        return;
    }
    res.send("User Created")
}