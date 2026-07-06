const express = require('express');
const router = express.Router();
import controller from "./controller.js";


router.get('/data',controller.getData);


export default router;