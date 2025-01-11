const express = require('express');
const userRoutes = require('../routes/userRoutes');
const videoRoutes = require('../routes/videoRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/videos', videoRoutes); // Video-related routes

// Default route for root URL
app.get('/', (req, res) => {
	res.send('Backend server is running!');
});

module.exports = app;
