const http = require("http");

const port = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end("batuka is here\n");
});

server.listen(port, () => {
  console.log(`server assan`);
});
