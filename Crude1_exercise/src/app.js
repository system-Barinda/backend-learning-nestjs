const express = require('express');
const router = require('./Routes/DataRouter');

const app = express()
app.use(express.json())
app.use('/api/data/',router);


app.use((req,res) => {
    res.status(404).json({ error: 'Route not found' })
})
module.exports = app;