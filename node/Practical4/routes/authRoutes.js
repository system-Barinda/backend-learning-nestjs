const express = require("express");
const router = express.Router();

const {
    signup,
    login,
} = require("../controllers/authController");


const {
    signupValidation,
    validate
} = require("../validators/authValidator");

router.post("/signup",signupValidation,validate, signup);
router.post("/login", login);

module.exports = router;