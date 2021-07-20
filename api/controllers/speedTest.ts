import { NextFunction, Request, Response } from "express"
import { FilterQuery } from "mongoose"
import ISpeedTest from "../interfaces/speedTest"
import SpeedTest from "../models/speedTest"

const getTests = (req: Request, res: Response, next: NextFunction) => {
    const { fromDate } = req.query
    let filters: FilterQuery<ISpeedTest> = {}
    if (typeof fromDate === "string" && Date.parse(fromDate)) {
        filters = { date: { $gte: new Date(fromDate) } }
    }

    SpeedTest.find(filters)
        .limit(100)
        .sort("date")
        .then((results) => {
            return res.status(200).json(results)
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
            })
        })
}

const addTest = (req: Request<ISpeedTest>, res: Response, next: NextFunction) => {
    const { up, down, date } = req.body

    if (up && down && date) {
        const test = new SpeedTest({ up, down, date })
        test.save()
            .then(() => {
                return res.sendStatus(201)
            })
            .catch((error) => {
                return res.status(500).json({
                    message: error.message,
                })
            })
    }
}

export default { getTests, addTest }
