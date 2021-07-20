import { NextFunction, Request, Response } from "express"

const getTests = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ up: 550, down: 100 })
}

export default { getTests }
