const fs = require('fs');

const filePath = './txt/input.txt';
const encoding = 'utf-8';
const textIn = fs.readFileSync(filePath, encoding);

console.log(textIn);

const writeTo = './txt/output.txt';
const textOut = `This is what we know about the avocado: ${textIn}\nCreated at ${Date.now()}`;

fs.writeFileSync(writeTo, textOut);
console.log('File written');
