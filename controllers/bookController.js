const asyncHandler = require("express-async-handler")
const db = require("../db")

const getBookById = asyncHandler(async(req,res)=>{
    const {bookId} = req.params;
    const book = await db.getBookById(Number(bookId))

    if(!book){
        res.status(400).send("Book not found");
        return
    }

    res.send(`Book name: ${book.name}`)
})

module.exports = {getBookById}