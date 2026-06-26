import { getAllData } from "../controllers/UserController.js";
import { validationRequest } from "../middleware/validateRequest.js";
import {getAllDataValidation} from "../utils/getAllDataValidation.js"
import { createDataValidation } from "../utils/createDataValidation.js";

import express from 'express';

const router = express.Router(); 



router.get('/data',getAllData,validationRequest,getAllDataValidation );
router.post('/data',createDataValidation,validationRequest,getAllDataValidation );

export default router;