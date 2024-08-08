const fs = require('fs');

// Read file asynchronously
const path = './txt/start.txt';
const encoding = 'utf-8';

fs.readFile(path, encoding, (error, data) => {
  console.log(data);
});

console.log('Will read file');
