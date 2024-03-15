const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/my-library');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
