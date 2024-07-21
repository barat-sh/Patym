import { Request, Response, NextFunction } from "express";
import prisma from "../../../prisma/prisma";

export const getAllUsers = async(req:Request,res:Response) => {
    try{
        const listOfUsers = await prisma.user.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                created_at: true
            }
        })
        return res.status(200).json({listOfUsers: listOfUsers})
    }catch(err){
        return res.status(500).json({message: "Internal server error", error: err})
    }
}

export const getUser = async(req:Request, res:Response) => {
    // @ts-ignore
    const userid = req.userid;
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: userid
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phoneNumber: true
            }
        })
        if (user){
            return res.status(200).json({user: user})
        }
        return res.status(400).json({message: "User not found."})
    }catch (err){
        return res.status(500).json({err: err, message: "Internal server error"})
    }
}

export const updateUser = async(req:Request, res:Response) => {
    // @ts-ignore
    const userId = req.userid;
    const { email, firstName, lastName, phoneNumber, created_at } = req.body;

    try{
        const updatedUser = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                phoneNumber: phoneNumber
            }
        })
        return res.status(200).json({message: "User updated", updatedUser: updatedUser})
    }catch(err){
        return res.status(500).json({message: "Error while updating user", Error: err})
    }
}