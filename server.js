const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.end('Hello from the server');
});

// Start server
const port = 8000;
const host = '127.0.0.1';
server.listen(port, host, () => {
  console.log(`Listing to request on port ${port}`);
});
