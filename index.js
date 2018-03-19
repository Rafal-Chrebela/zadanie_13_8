var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.on("request", function(request, response) {
  response.setHeader("Content-Type", "text/html");
  if (request.method === "GET" && request.url === "/") {
    fs.readFile("./index.html", function(err, data) {
      response.write(data);
      response.end();
    });
  } else {
    response.setHeader("Content-Type", "image/gif");
    response.statusCode = 404;
    fs.readFile("./404.gif", function(err, data) {
      response.write(data);
      response.end();
    });
  }
});

server.listen(8083);
