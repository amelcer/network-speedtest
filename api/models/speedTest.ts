import mongoose, { Schema } from "mongoose"
import ISpeedTest from "../interfaces/speedTest"

const SpeedTestSchema: Schema = new Schema({
    up: { type: Number, required: true },
    down: { type: Number, required: true },
    date: { type: Date, required: true },
})

export default mongoose.model<ISpeedTest>("SpeedTest", SpeedTestSchema)
