const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;

  const num = _.random(0, 20);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();
  
  res.setHeader("Content-Type", "text/html");

  let path = "./";

  console.log(req.url)
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  console.log(path)

  fs.readFile(path, (err,data)=>{
    if(err){
        console.log(err);
        res.end();

    }else {
        res.end(data)
    }
  })

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
