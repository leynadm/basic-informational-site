const { Router } = require("express");
const {getBookById} = require("../controllers/bookController")
const bookRouter = Router();

// Middleware for logging the time when a request is made
bookRouter.use((req, res, next) => {
    console.log('Time:', Date.now());  // You had Date.name(), which should be Date.now() for time
    next();  // Proceed to the next middleware/route handler
  });
  
bookRouter.get("/:bookId", getBookById);

module.exports = bookRouter