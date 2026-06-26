import { validationResult } from "express-validator";
import { success } from "zod";
export const validationRequest = (req,res,next) => {
    const errors = validationResult;
    if(!errors.isEmpty()){
        return res.status(400).jsone({
            success:true,
            error:errors.arrays()
        });
        
    }
    next()
}