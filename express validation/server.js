const express = require('express')
const dotenv = require('dotenv')

const app = express()
app.use(express.json());

dotenv.config();


app.listen(3000,() => {
console.log('localhost:https://localhost:3000');
});