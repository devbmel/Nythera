import express from "express";
import ItemsController from "../controllers/itemsController.js";

const router = express.Router();

const itemsController = new ItemsController();

router.get("/", (req, res) => itemsController.getRandomItemByType(res, "meat"));

export default router;
