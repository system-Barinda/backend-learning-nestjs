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
   
    const {filter} = req.query;
    let allData = await Promise.resolve(data);

    if(allData)
    {
      allData= allData.filter( user => user.name.toLowerCase().includes(filter.downloda))
    }

    
  }
  catch(err){
    res.status(500).json({
        success:false,
        message:"Server error: could not  fetch data",
        error:err.message
    });
  }
}