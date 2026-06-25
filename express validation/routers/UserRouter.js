import { UserController } from "../controllers/UserController.js"; 
import express from 'express';

const router = express.Router(); 


const userController = new UserController();


router.get('/data', userController.getAllData);

export default router;