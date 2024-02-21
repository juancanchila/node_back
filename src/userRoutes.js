// src/userRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('./authMiddleware');

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    // Authenticate user (validate credentials)
    const { username, password } = req.body;
    // Example: check username and password against database
    const user = { username: username }; // Example user object
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
});

// Protected route (requires authentication)
router.get('/profile', authenticateToken, (req, res) => {
    res.json(req.user);
});

router.get('/status', (req, res) => {
    res.send('Server is running');
});

module.exports = router;
