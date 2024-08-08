const fs = require('fs');

// Read file asynchronously
const path = './txt/start.txt';
const encoding = 'utf-8';

fs.readFile(path, encoding, (error, data1) => {
  fs.readFile(`./txt/${data1}.txt`, encoding, (error, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, encoding, (error, data3) => {
      console.log(data3);
    });
  });
});

console.log('Will read file');
