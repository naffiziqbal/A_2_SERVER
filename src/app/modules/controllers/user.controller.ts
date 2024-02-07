import { RequestHandler } from "express";
import { UserServices } from "../services/user.services";


const createUser: RequestHandler = async (req, res) => {
    const { name, email, password, role } = req.body;

    const userData = { name, email, password, role };

    try {
        const data = await UserServices.createUser(userData);
        if (data && typeof data === "object" && "user" in data) {
            res.status(201).json({
                success: true,
                data,
                message: "User created successfully",
            });
        } else {
            throw new Error("User Already Exists");
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}



export const UserController = { createUser }
