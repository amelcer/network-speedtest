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
    const { up, down, date, server } = req.body
    if (up !== undefined && down !== undefined && date && server) {
        const test = new SpeedTest({ up, down, date, server })
        test.save()
            .then((saved) => {
                console.log("SAVED REQUEST")
                return res.status(201).json(saved)
            })
            .catch((error) => {
                console.log(error)
                return res.status(500).json({
                    message: error.message,
                })
            })
    } else {
        return res.status(400).json({
            message: `Wrong data body`,
        })
    }
}

export default { getTests, addTest }
