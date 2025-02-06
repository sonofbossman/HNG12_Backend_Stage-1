import express from "express";
export const router = express.Router();
import { classifyNum } from "../controllers/controller.js";

router.route("/api/classify-number").get(classifyNum);
