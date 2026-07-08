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
      },


      // let write that we have
      async writeTask(req,res){
        try{

             const { name, status } = req.body;
             const task = await this.readTask();
             const newTask = {
                id:task[task.length -1].id + 1,
                name,
                status
             };
             task.push(newTask);
             await fs.writeFile(filePath, JSON.stringify(task, null,2));
             return res.json(newTask);

        }
        catch(err){
            res.status(500).json({message:'Error writing task file'});
        }
      }
};

router.get('/tasks',proccessTask.readTask);
router.post('/create',proccessTask.writeTask);

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

