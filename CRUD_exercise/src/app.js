const express = require('express');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(express.json());

app.use('/api/items', itemRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;