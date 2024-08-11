const http = require('http');
const fs = require('fs');
const url = require('url');

const fillTemplate = require('./moduels/fillTemplate');

const dataFilePath = `${__dirname}/dev-data/data.json`;
const encoding = 'utf-8';

const data = fs.readFileSync(dataFilePath, encoding);
const dataObj = JSON.parse(data);

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
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    const cardsHtml = dataObj
      .map((card) => fillTemplate(card, cardTemplate))
      .join('');

    const cardsOutput = overviewTemplate.replace(
      '{%PRODUCT_CARDS%}',
      cardsHtml
    );

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(cardsOutput);

    // Product page
  } else if (pathname === '/product') {
    const product = dataObj[+query.id];
    const productOutput = fillTemplate(product, productTemplate);

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(productOutput);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // Not found
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
