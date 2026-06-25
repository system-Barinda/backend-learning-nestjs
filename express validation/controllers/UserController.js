import data from "..data.js";
import { error } from "node:console";
import { date, success } from "zod";


export const getAllData = async (req,res) => {
  try{
    const Alldata = await Promise.resolve(data);
    res.status(200).json({success:true,data:Alldata});
  }
  catch(err){
    res.status(500).json({
        success:false,
        message:"Server error: could not  fetch data",
        error:err.message
    });
  }
}