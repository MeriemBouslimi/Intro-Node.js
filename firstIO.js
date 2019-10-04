let fs = require('fs');
let filePath=process.argv[2];
let buffer = fs.readFileSync(filePath);
let str = buffer.toString();
let arr = str.split('\n');
let l=arr.length-1;
console.log(l);