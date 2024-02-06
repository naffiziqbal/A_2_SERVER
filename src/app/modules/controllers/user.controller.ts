import { RequestHandler } from "express";
import { UserServices } from "../services/user.services";


const createUser: RequestHandler = async (req, res) => {
    const { name, email, password, role } = req.body;
    const userData = { name, email, password, role }
    try {
        const data = await UserServices.createUser(userData)
        console.log(data, "Controller")
        res.status(201).json({
            success: true,
            data,
            message: "User created successfully"
        })
    }
    catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}


export const UserController = { createUser }
