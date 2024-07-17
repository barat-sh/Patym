import { Request, Response, NextFunction } from "express";
import prisma from "../../../../prisma/prisma";
import { loginModel } from "./login.model";
import bcrypt from "bcrypt";
import jwt, {JwtPayload} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "S3CR3TK3Y";

export const login = async(req: Request, res:Response) => {
    const { email, password } = req.body;

    const loginValidation = loginModel.safeParse({
        email: email,
        password: password
    })
    if(!loginValidation.success){
        return res.json({message: "Invalid email or password inputs."})
    }

    try{
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match){
                const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
                res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'strict' });
                return res.json({message: "user logged in", token: token})
            }
            return res.json({message: "Invalid username or password"})
        }
        else{
            return res.json({message :"Invalid email or password"})
        }
    }catch(err){
        console.log(err)
        return res.json({message : "Error while logging in or Internal Server Error"})
    }
}
   
export const getuser = async(req:Request,res:Response)=>{
    // @ts-ignore
    console.log(req.userid);
    //@ts-ignore
    const userId = req.userid;
    const user = await prisma.user.findUnique({
        where:{
            id: userId
        }
    })

    res.json({user: user})
}