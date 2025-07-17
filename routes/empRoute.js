import express from "express";
import { protect } from "../middlewares/protectMiddle.js";
import {
  createEmp,
  deleteEmp,
  getAll,
  getUser,
  readEmp,
  updateEmp,
} from "../controllers/empRoute.js";
const router = express.Router();

router.get("/me", protect, getUser);
router.get("/get-all", getAll);
router.get("/user/:id", readEmp);
router.post("/user", createEmp);
router.put("/user", updateEmp);
router.delete("/user/:id", deleteEmp);

export default router;
