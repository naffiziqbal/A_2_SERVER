import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(process.cwd(), ".env") })

export default {
    database: process.env.DB_URL,
    port : process.env.PORT,
    JWT_SECRET : process.env.SECRET_TOKEN
}
