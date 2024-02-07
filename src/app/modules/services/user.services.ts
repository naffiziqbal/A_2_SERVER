import config from "../../../config"
import { IUser } from "../../types/types"
import User from "../schema/user.Schema"
import jwt from "jsonwebtoken"

const createUser = async (userData: IUser) => {
    try {
        // ? Checking if Email Is Already In Use
        const existing = await User.findOne({ email: userData.email })
        if (existing) return { error: "User already exists" }
        // Create user
        const user = await User.create(userData);
        if (user._id) {
            const token = jwt.sign(
                { id: user._id },
                config.JWT_SECRET as string,
                { expiresIn: "1h" },
            );
            return { user, token }
        }
        return { error: "User not created" }
    } catch (error) {
        return error;
    }
}



export const UserServices = { createUser }
