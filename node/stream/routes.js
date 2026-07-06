import express from "express";
import controller from "./controller.js";

const router = express.Router();

router.get("/data", controller.getData);

export default router;