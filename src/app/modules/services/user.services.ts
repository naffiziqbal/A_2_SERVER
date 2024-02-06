import { IUser } from "../../types/types"
import User from "../schema/user.Schema"

const createUser = async (userData: IUser) => {
    try {
        const data = await User.create(userData)
        console.log(data, "service")
        return data
    } catch (error) {
        return error
    }
}


export const UserServices = { createUser }
