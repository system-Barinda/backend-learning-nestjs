const express = require('express');
const router = express.Router();
import controller from "./controller";


router.get('/data',controller.getData);


export default router;