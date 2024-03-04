// ratelimiter-server.js

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const RateLimiter = require('antiabuse-ratelimiter');

const app = express();
const rateLimiter = new RateLimiter({
  limit: 5, // Allow 5 requests
  interval: 60 * 1000 // per minute
});

// Apply rate limiting middleware to all routes
app.use(rateLimiter.middleware());

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Middleware for setting various HTTP headers for security
app.use(helmet());

// Your routes and other middleware...
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Export the Express app
module.exports = app;
