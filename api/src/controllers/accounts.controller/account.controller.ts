import { Request, Response } from "express"
import prisma from "../../../prisma/prisma";
import { accountModel } from "./account.model";

export const createAccount = async (req:Request,res:Response)=> {
    const { balance } = req.body;
    // @ts-ignore
    const userId = req.userid;

    const accountValidation = accountModel.safeParse({
        userId: userId,
        balance: parseFloat(balance)
    })

    try{
        const createdAccount = await prisma.account.create({
            data: {
                userId: userId,
                balance: balance
            },
            select: {
                userId: true,
                account_id: true,
                balance: true
            }
        })
        if (createdAccount){
            return res.status(200).json({message: "User wallet Account Created", account: createdAccount})
        }
        return res.status(400).json({message: "Error while creating user"})
    }catch(err){
        return res.status(500).json({message: "internal server error"})
    }
}