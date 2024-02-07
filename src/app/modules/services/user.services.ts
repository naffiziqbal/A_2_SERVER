import config from "../../../config"
import { IUser, IUserLogin } from "../../types/types"
import User from "../schema/user.Schema"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const createUser = async (userData: IUser) => {

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

}

const loginUser = async (userData: IUserLogin) => {
    // ? Checking If User Available
    const user = await User.findOne({ email: userData.email })
    if (!user) return { error: "User not found" }

    //? Matching Password
    const isMatch = await bcrypt.compare(userData.password, user.password)
    if (!isMatch) return { error: "Password does not match" }

    //? Assigning Token
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET as string, { expiresIn: "1h" })
    return { user, token }

}


const getUser = async (_id: string) => {
    const user = await User.findOne({ _id })
    if (!user) throw new Error("User not found")
    // console.log(user)
    return user
}

const createNewAdmin = async (email: string) => {
    const admin = await User.findOneAndUpdate({ email }, { role: "admin" })
    console.log(admin)
    return admin
}

export const UserServices = { createUser, loginUser, getUser, createNewAdmin }
