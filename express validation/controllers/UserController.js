import data from "../data.js";
import { validationResult } from "express-validator";

export const getAllData = async (req, res) => { // 1. Cleaned up parameters

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      success: false, // Fixed spelling
      error: error.array()
    });
  }
 
  try {
    const { filter } = req.query;
    let allData = await Promise.resolve(data);


    if (filter && allData) {
      allData = allData.filter(user => 
        user.name.toLowerCase().includes(filter.toLowerCase()) 
      );
    }

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