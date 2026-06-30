const express = require("express");
const router = express.Router();

const DataController = require('../controllers/DataController');

router.get('/', DataController.ReadData);

module.exports = router;