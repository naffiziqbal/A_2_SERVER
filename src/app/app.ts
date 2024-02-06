import config from "../config";
import express from "express"
import cors from "cors"
import UserRouter from "../app/modules/routes/user.routes"


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// ? Routers
app.use("/api/v1/user", UserRouter)






export default app
