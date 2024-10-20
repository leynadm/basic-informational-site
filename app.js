
const express = require("express");
const path = require("path");  // You need to require the path module
const app = express();

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");

app.use('/author',authorRouter)
app.use('/book',bookRouter)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', function(req, res) {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


  console.log('works')

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);

});
