import express  from 'express'
import dotenv from 'dotenv'
import userRouter from "./routers/UserRouter.js";
const app = express()
app.use(express.json());

dotenv.config();

app.use(Router);
app.listen(3000,() => {
console.log('localhost:https://localhost:3000/');
});