const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs').promises;
const cors = require('cors');
const path = require('path');
const { requestLogger } = require('./middleware/requestLogger');

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

const PORT = 3000;
const filePath = path.join(__dirname, 'task.json');

const processTask = {

    // Read all tasks
    async readTask(req, res) {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            const tasks = JSON.parse(data);

            return res.json(tasks);
        } catch (err) {
            return res.status(500).json({
                message: 'Error reading task file'
            });
        }
    },

    // Create a new task
    async writeTask(req, res) {
        try {
            const { name, status } = req.body;

            if (!name || !status) {
                return res.status(400).json({
                    message: 'Name and status are required.'
                });
            }

            const data = await fs.readFile(filePath, 'utf8');
            const tasks = JSON.parse(data);

            const newTask = {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                name,
                status
            };

            tasks.push(newTask);

            await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));

            return res.status(201).json(newTask);

        } catch (err) {
            return res.status(500).json({
                message: 'Error writing task file'
            });
        }
    },

    // Update an existing task
 async updateTask(req, res) {
    try {
        const { id } = req.params;
        const { name, status } = req.body;

        const data = await fs.readFile(filePath, 'utf8');
        const tasks = JSON.parse(data);

        const currentTask = tasks.find(task => task.id === Number(id));

        if (!currentTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if (name) currentTask.name = name;
        if (status) currentTask.status = status;

        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));

        return res.status(200).json(currentTask);

    } catch (err) {
        return res.status(500).json({
            message: "Error updating task file"
        });
    }
},




};

router.get('/tasks', processTask.readTask);
router.post('/create', processTask.writeTask);
router.put('/update/:id', processTask.updateTask);

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});