const express = require('express')
const app = express();

const PORT = 6000;

const nemuricAmount = (item) => Number(item);

const exchangeRate = {
    usd:1300,
    eur:1500,
    gbp:2000,
};


app.post('/convert', async(req,res) => {
     try{
    const {amount,currency} = req.query;


    const numericPr = nemuricAmount(amount);

    if(!numericPr){
        return res.status(500).json({
            message:'please provide valid amount'
        });
    }


   if(!exchangeRate[currency]){
     return res.status(500).json({
        message:"please provide the currency either usd, eur, or gbp"
     })
   }

   const convertedAmount = numericPr * exchangeRate[currency];
   return res.status(200).json({
    input:{amount:amount,currency:currency},
    convertedAmount:convertedAmount,
    unit:"RWF"
   })

 }
 catch(err){
    console.error(err.message);
 }

})

app.use((err) => {
    if(!req.url){
        return res.status(500).json({message:"invalid parameter"})
    }
    
})




app.listen(PORT,() => {
    console.log("server running on : 6000");
})



