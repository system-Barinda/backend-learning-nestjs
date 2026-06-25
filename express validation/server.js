import express from 'express';
import Router from './routers/UserRouter.js'; 

const app = express();
app.use(express.json());

app.use(Router); 

app.listen(3000, () => {
  console.log('Server running on port 3000');
});