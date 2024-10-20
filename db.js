// db.js

const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
  ];
  
  const books = [
    { id: 1, name: "Robinson Crusoe" },
    { id: 2, name: "The Mystery Island" },
    { id: 3, name: "How to win friends and influence people" },
  ];
  

  async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
  };

  async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
  };
  
  module.exports = { getAuthorById,getBookById };
  