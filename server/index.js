import express from "express";
import { config } from "dotenv";
import connectDB from "./database/db.js";

const app = express();

config({
  path: "./config.env",
});

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
