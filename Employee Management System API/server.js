import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import CookieParser from "cookie-parser";
import { ConnectDB } from "./config/connectDB.js";
import baseRoute from "./routes/index.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(CookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

ConnectDB();

app.use("/api/ems/v1", baseRoute);
// Routes();

app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}/`);
});
