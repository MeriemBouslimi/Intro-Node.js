let fs = require('fs');
let filePath=process.argv[2];
buffer = fs.readFile(filePath,function callback (err,data){
    if(err){return err} 
    let str = data.toString();
    let arr = str.split('\n');
    let l=arr.length-1;
    console.log(l);
})

