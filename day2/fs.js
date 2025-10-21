
// //Write to a File
// const fs = require('fs')


// fs.writeFileSync('hello.txt', 'Hi Swadesh! Welcome to Node.js.');
// console.log('File created successfully!');

//read file 
const data = fs.readFileSync('fs.js', 'utf-8');
console.log('File content:', data);