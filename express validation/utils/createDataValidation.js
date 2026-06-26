import { body } from "express-validator";

export const createDataValidation = [
    body("name").notEmpty()
                .withMessage("Name is required"),,
    body("age").isInt()
               .withMessage("Age must be a positive integer")          
]