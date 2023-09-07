const http = require("http");

let handler = (req, res) => {
  if (req.url === "/") {
    res.end("Hello World");
  } else if (req.url === "/api") {
    res.end("Welcome to API!");
  } else {
    res.writeHead(404);
    res.end();
  }
};

http.createServer(handler).listen(8080);
