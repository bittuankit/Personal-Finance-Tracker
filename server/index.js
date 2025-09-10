import express from "express";
import { config } from "dotenv";

const app = express();

config({
  path: "./config.env",
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
