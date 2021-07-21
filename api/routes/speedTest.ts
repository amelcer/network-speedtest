import express from "express"
import speedTestController from "../controllers/speedTest"

const router = express.Router()

router.get("/get", speedTestController.getTests)
router.post("/add", speedTestController.addTest)

export = router
