const { body, param } = require("express-validator");

export const validateCreateItem = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters."),

  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number."),
];

export const validateUpdateItem = [
  param("id")
    .notEmpty()
    .withMessage("Item ID is required."),

  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty.")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters."),

  body("price")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number."),
];

export const validateItemId = [
  param("id")
    .notEmpty()
    .withMessage("Item ID is required."),
];
