const express = require('express');
const dotenv = require('dotenv');
import routes from './routes.js';
const cors = require('cors');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());


app.use('/api',routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



