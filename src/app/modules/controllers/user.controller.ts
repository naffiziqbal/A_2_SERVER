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


const loginUser: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    const userData = { email, password };
    try {
        const user = await UserServices.loginUser(userData)
        console.log(user)
        if (user && typeof user === "object" && "user" in user) {
            res.status(200).json({
                success: true,
                data: user,
                message: "User logged in successfully",
            });
        } else {
            throw new Error("Invalid Credentials")
        }
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}



const getUser: RequestHandler = async (req, res) => {
    const _id = req.params.id;
    // console.log(_id)
    try {
        const user = await UserServices.getUser(_id)
        // console.log(user, "User")
        if (user._id) {
            res.status(200).json({
                success: true,
                user
            })
        }
        else {
            throw new Error("User not found")
        }

    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}

export const UserController = { createUser, loginUser, getUser }
