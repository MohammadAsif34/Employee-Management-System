import express from "express";
import authRoute from "./authRoute.js";
import empRoute from "./empRoute.js";
const routes = express.Router();
routes.get("/", (req, res) => {
  try {
    res.json({ code: 200, status: "OK", message: "welcome to EMS" });
  } catch (error) {
    res.json({ code: 500, status: "OK", message: error.message });
  }
});

routes.use("/auth", authRoute);
routes.use("/emp", empRoute);

export default routes;
