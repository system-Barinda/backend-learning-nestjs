const express = require('express');
const { convertTypeAcquisitionFromJson } = require('typescript');
const app = express();


function logger(req,res,next){
    console.log(`Request URL: ${req.url} Request Type: ${req.method}`);
    next();
}

app.use(logger);

app.get('/done',(req,res) => {
 res.send("welecome to done page my name is barinda system sylvere");
});
app.get('/done/:id',(req,res) => {
    res.send(`welecome to done page my name is barinda system sylvere and the id is ${req.params.id}`);
   });

app.listen(8090, () => {
    console.log("server running on port 8090");
})