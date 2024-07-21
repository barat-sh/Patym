import { Request,Response,NextFunction } from "express";
const JWT_SECRET = process.env.JWT_SECRET || "S3CR3TK3Y";
import jwt, {JwtPayload} from "jsonwebtoken";

export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(decoded);
    if (!decoded) {
        return res.status(500).send({ message: 'Failed to authenticate token.' });
    }

    const payload = decoded as JwtPayload;
    // @ts-ignore
    req.userid = payload.id;
    next();
};
