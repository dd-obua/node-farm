const http = require('http');
const fs = require('fs');

const encoding = 'utf-8';
const path = `${__dirname}/dev-data/data.json`;
const data = fs.readFileSync(path, encoding); 

// Create server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('Overview page');
  } else if (pathName === '/product') {
    res.end('Product page');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'Custom-header': 'Hello World!',
    });
    res.end('<h3>Not found</h3>');
  }
});

// Start server
const port = 8000;
const host = '127.0.0.1';

server.listen(port, host, () => {
  console.log(`Listing to request on port ${port}`);
});
