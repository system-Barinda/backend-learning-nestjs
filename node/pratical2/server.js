const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs').promises;
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const router = express.Router();


app.use(cors());
app.use(express.json());

const PORT =3000;
const filePath = path.join(__dirname, 'task.json');

const proccessTask = {
         
// let read that we have
      async readTask(req,res){
        try{
            const task = await fs.readFile(filePath,'utf8');
            return res.json(JSON.parse(task));
        }
        catch(err){
           res.status(500).json({
            message: "Error reading task file"
        });
        }
      }
};

router.get('/tasks',proccessTask.readTask);

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

