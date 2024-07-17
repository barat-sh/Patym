import { Request, Response } from "express";
import prisma from "../../../../prisma/prisma";
import { signupModel } from "./signup.model";
import bcrypt from "bcrypt";

export const signup = async(req:Request,res:Response) => {
    const {firstName, lastName, email, password, phoneNumber} = req.body;

    const signupValidation = signupModel.safeParse({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: bcrypt.hashSync(password, 10),
        phoneNumber: phoneNumber
    })
    if (!signupValidation.success){
        return res.json({message: "Invalid User data."})
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (user) {
            return res.status(400).json({ message: "Email already registered." });
        }
    
        // Proceed with user registration or other logic if email is not registered
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." });
    }
    
    try{
        await prisma.user.create({
            data: signupValidation.data
        });
        return res.json({message: "New user created"})

    }catch(err){
        console.log(err)
        return res.json({message: "Error while creating new user or Internal server error"})
    }
}