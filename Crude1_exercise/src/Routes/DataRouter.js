const express = require("express");
const router = express.Router();

const DataController = require('../controllers/DataController');

router.get('/', DataController.ReadData);
router.post('/', DataController.CreateData);

module.exports = router;