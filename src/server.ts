import mongoose from "mongoose";
import config from "./config";
import app from "./app/app";


const port = config.port || 7000

const main = async () => {

    try {
        await mongoose.connect(config.database as string);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }

}


main().catch((err) => { console.log(err) })
