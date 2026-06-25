import data from "../data.js";
import { validationResult } from "express-validator";


export const getAllData = async (query("filter"), req,res) => {
 const error = validationResult(req);

 if(!error.isEmpty()){
  return res.status(400).json({
    seccues:false,
    error:error.array()
  })
 }
 
  try{
   
    const Alldata = await Promise.resolve(data);
    res.status(200).json({success:true,message:'data fetched successfully',data:Alldata});
  }
  catch(err){
    res.status(500).json({
        success:false,
        message:"Server error: could not  fetch data",
        error:err.message
    });
  }
}