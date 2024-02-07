import { NextFunction, Request, Response } from "express"
import config from "../../config"
import jwt, { JwtPayload } from "jsonwebtoken"


const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    const token = authHeader?.split(" ")[1];
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: "Session Expired" })
    }
    try {
        const decoded = jwt.verify(token, config.JWT_SECRET as string) as JwtPayload
        (req as any).user = decoded.user
        next()
    }
    catch (err: any) {
        return res.status(401).json({ error: "Unauthorized User" })
    }
}


export const JWT = { verifyToken }
