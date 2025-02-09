import express from "express";
import BeastsController from "../controllers/beastsController.js";

const router = express.Router();

const beastsController = new BeastsController();

router.get("/", (req, res) => beastsController.getBeasts(req, res));
router.get("/:id", (req, res) => beastsController.getBeastById(req, res));
router.post("/:id/feed", (req, res) =>
  beastsController.feedBeastById(req, res)
);
export default router;
