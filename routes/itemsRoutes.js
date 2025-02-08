import express from "express";
import ItemsController from "../controllers/itemsController.js";

const router = express.Router();

const itemsController = new ItemsController();

router.get("/:itemType", (req, res) =>
  itemsController.getItemsByType(req, res)
);

export default router;
