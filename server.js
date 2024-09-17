const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
    // Removed deprecated options
});

// Check MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Error handling
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});