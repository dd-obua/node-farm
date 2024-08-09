const http = require('http');
const fs = require('fs');

const encoding = 'utf-8';
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, encoding);

// Read templates
const templateRoot = `${__dirname}/templates`;

const overviewTemplate = fs.readFileSync(
  `${templateRoot}/overview-template.html`,
  encoding
);
const productTemplate = fs.readFileSync(
  `${templateRoot}/product-template.html`,
  encoding
);
const cardTemplate = fs.readFileSync(
  `${templateRoot}/card-template.html`,
  encoding
);

// Create server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview page
  if (pathName === '/' || pathName === '/overview') {
    res.end('Overview page');

    // Product page
  } else if (pathName === '/product') {
    res.end('Product page');

    // API
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    // Not found
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
