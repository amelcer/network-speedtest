import express from "express"
import dotenv from "dotenv"
import config from "./config/config"
import mongoose from "mongoose"
import speedTest from "./routes/speedTest"

dotenv.config()

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        console.log("connected to mongoDB")
    })
    .catch((e) => {
        console.log(e)
    })

const api = express()
api.use(express.json())

api.use("/tests", speedTest)

api.get("/", (req, res) => {
    res.status(200).json({
        message: "ok",
    })
})

api.listen(config.server.port, () => console.log(`listening ${config.server.port}`))
