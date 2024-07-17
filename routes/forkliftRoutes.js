import express from "express";
import ForkliftController from "../controllers/ForkliftController.js";

const router = express.Router();

router.get("/", ForkliftController.getAllData);

router.post("/add", ForkliftController.addForklift);

export default router;
