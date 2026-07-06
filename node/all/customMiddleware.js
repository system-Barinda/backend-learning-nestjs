const express = require('express');
const { convertTypeAcquisitionFromJson } = require('typescript');
const app = express();


function logger(req,res,next){
    console.log("request received at: " + new Date().toISOString());
    next();
}

app.use(logger);

app.get('/done',(req,res) => {
 res.send("welecome to done page my name is barinda system sylvere");
});

app.listen(8090, () => {
    console.log("server running on port 8090");
})