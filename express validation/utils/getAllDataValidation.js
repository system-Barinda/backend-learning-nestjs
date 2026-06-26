import { query } from "express-validator";
export const getAllDataValidation = [
    query("filter").optional()
                   .isString()
                   .withMessage("filter must be string"),
    query("value").optional()
                  .isString()
                  .withMessage("value must be string")               
];