import { success } from "zod";
import data from "../data.js";

export const getAllData = async (req, res) => { 
  try {
       const { query :{filter,value}, } = req ;

       let result = data;
       if(filter && value){
        result = data.filter(item =>  String(item[filter]).includes(value));
       }

       return res.status(200).json({
        success:true,
        message:'Data fetched successfull',
        data:result
       })


    
  }catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};