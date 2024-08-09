const http = require('http');
const fs = require('fs');
const url = require('url');

const encoding = 'utf-8';
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, encoding);
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

function fillTemplates(product, template) {
  let output = template.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);

  if (!product.organic) {
    output = output.replace('{%NOT_ORGANIC%}', 'not-organic');
  }

  return output;
}

// Create server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview page
  if (pathName === '/' || pathName === '/overview') {
    const cardsHtml = dataObj
      .map((card) => fillTemplates(card, cardTemplate))
      .join('');

    const cardsOutput = overviewTemplate.replace(
      '{%PRODUCT_CARDS%}',
      cardsHtml
    );

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('Overview');

    // Product page
  } else if (pathName === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(productTemplate);

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
