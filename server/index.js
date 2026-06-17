import express from "express";
import { config } from "dotenv";
import connectDB from "./database/db.js";
import transactionsRoutes from "./routes/transactions.js";
import usersRoutes from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "https://personal-finance-tracker-frontend-delta.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/transactions", transactionsRoutes);
app.use("/api/v1/users", usersRoutes);

config({
  path: "./config.env",
});

connectDB();

const SERVER_URL = process.env.SERVER_URL || 3000;

app.listen(SERVER_URL, () => {
  console.log(`Server is running at port ${SERVER_URL}`);
});
