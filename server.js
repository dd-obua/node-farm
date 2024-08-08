const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('Overview page');
  } else if (pathName === '/product') {
    res.end('Product page');
  } else {
    res.end('Not found');
  }
});

// Start server
const port = 8000;
const host = '127.0.0.1';

server.listen(port, host, () => {
  console.log(`Listing to request on port ${port}`);
});
