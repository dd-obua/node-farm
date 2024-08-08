const fs = require('fs');

// Read file asynchronously
const path = './txt/start.txt ';
const encoding = 'utf-8';

fs.readFile(path, encoding, (error, data1) => {
  if (error) return console.error('Error');

  fs.readFile(`./txt/${data1}.txt`, encoding, (error, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, encoding, (error, data3) => {
      console.log(data3);

      // Write file asynchronously
      const content = `${data2}\n${data3}`;
      fs.writeFile(`./txt/final.txt`, content, encoding, (error) => {
        console.log('Your file has been written');
      });
    });
  });
});

console.log('Will read file'); 
