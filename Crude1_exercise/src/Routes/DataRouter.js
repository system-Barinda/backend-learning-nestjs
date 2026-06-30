const DataController = require('../controllers/DataController');
const express = require('express');
const router = express.Router();

router.get('/',DataController.ReadData());

module.exports = router;