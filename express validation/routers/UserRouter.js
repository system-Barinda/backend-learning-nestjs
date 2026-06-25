import { getAllData } from "../controllers/UserController.js";
import express from 'express';

const router = express.Router(); 



router.get('/data',getAllData);

export default router;