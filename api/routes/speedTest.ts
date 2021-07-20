import express from "express"
import speedTestController from "../controllers/speedTest"

const router = express.Router()

router.get("/all", speedTestController.getTests)

export = router
