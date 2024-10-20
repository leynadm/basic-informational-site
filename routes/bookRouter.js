const { Router } = require("express");
const {getBookById} = require("../controllers/bookController")
const bookRouter = Router();

bookRouter.get("/:bookId", getBookById);

module.exports = bookRouter