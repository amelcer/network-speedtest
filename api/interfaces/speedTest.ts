import { Document } from "mongoose"

export default interface ISpeedTest extends Document {
    up: number
    down: number
    date: Date
    server: String
}
