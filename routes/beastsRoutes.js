import express from "express";
import BeastsController from "../controllers/beastsController.js";

const router = express.Router();

const beastsController = new BeastsController();

router.get("/", (req, res) => beastsController.getBeasts(req, res));

export default router;
