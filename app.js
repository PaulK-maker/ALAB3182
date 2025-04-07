const express = require('express');
const morgan = require('morgan'); // HTTP request logger
const mainRoutes = require('./routes/mainRoutes');
const logger = require('./middleware/logger');

const app = express();
const port = 3000;

// Set template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public')); // Serve static files
app.use(morgan('dev')); // Log HTTP requests
app.use(logger); // Custom middleware (see logger.js)

// Routes
app.use('/', mainRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});