// Custom middleware to log request details
module.exports = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // call next() to continue processing
  };