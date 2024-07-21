import { Response, Request } from "express";

export const logout = (req:Request, res:Response) => {
    res.clearCookie("jwt")
    res.send("User Logged out")
}