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

const PORT = process.env.PORT || 3000;

const filePath = path.join(__dirname, 'task.json');


const proccessTask = {

};

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

