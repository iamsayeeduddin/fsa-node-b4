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

// REST - REpresenatational State Transfer
// 1. Uniform Interface -
// 2. Client Server Decoupling -
// 3. Stateless -
// 4. Cacheability -
// 5. Layered Architecture System -
// 6. Code On Demand (Optional) - Code

// HTTP Methods / Action Verbs (CRUD)
// Create - POST -
// Read - GET -
// Update - PUT, PATCH
// Delete - DELETE

// Req Body, Req Headers, Req Params

// Status
// 1xx - Informational Status
// 2xx - Success Code - 200 OK - 201 Created - 204 No Content
// 3xx - Redirection
// 4xx - Client Error - 404 - Not Found
// 5xx - Server Error - 501 - Unable to Process - 500 - Internal Server Error
