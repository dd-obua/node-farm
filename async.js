const fs = require('fs');

// Read file asynchronously
const encoding = 'utf-8';

fs.readFile('./txt/start.txt ', encoding, (error, data1) => {
  if (error) return console.error('Error');
  console.log(data1);

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
