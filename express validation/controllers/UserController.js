import data from "../data.js";
import { query } from "express-validator";

export const getAllData = query("filter").isEmpty().isString(),async (req, res) => { 

  try {
       const { query :{filter,value}, } = req ;
        if(filter && value){
          return res.send(data.filter((user) => user[filter].includes(value)))
        }
        return res.send(user)

    // 4. Send the response back (Crucial step!)
    res.status(200).json({
      success: true,
      message: 'Data fetched successfully',
      data: allData
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error: could not fetch data",
      error: err.message
    });
  }
};