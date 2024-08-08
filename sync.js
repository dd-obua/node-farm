const fs = require('fs');

const path = './txt/input.txt';
const encoding = 'utf-8';
const textIn = fs.readFileSync(path, encoding);

console.log(textIn);
