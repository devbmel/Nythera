import express from "express";
import dotenv from "dotenv";
import itemsRoutes from "./routes/itemsRoutes.js";
import huntRoutes from "./routes/huntRoutes.js";
import fishingRoutes from "./routes/fishingRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import harvestRoutes from "./routes/harvestRoutes.js";
import beastsRoutes from "./routes/beastsRoutes.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/items", itemsRoutes);
app.use("/hunt", huntRoutes);
app.use("/fishing", fishingRoutes);
app.use("/explore", exploreRoutes);
app.use("/harvest", harvestRoutes);
app.use("/beasts", beastsRoutes);

app.listen(PORT, (req, res) => {
  console.info(`Server running ${PORT}`);
});
