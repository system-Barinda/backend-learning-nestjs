import { body } from "express-validator";

export const createDataValidation = [

  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required"),

  body("website")
    .trim()
    .notEmpty()
    .withMessage("Website is required")
    .isURL()
    .withMessage("Please provide a valid website URL"),

];