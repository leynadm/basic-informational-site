const express = require("express");
const path = require("node:path");
const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/author',authorRouter)
app.use('/book',bookRouter)

// app.js

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});


app.get('/about', function(req, res) {
  res.render("about", {specialOffer:"Mondaylight"});
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
