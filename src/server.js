// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
// Define your routes here

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
