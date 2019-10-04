let mymodule = require('./mod.js');

let ext = process.argv[3];
let dir = process.argv[2];
let callback = function (err, data) {
    if (err) { return err }
    for (let i = 0; i < data.length; i++) { console.log(data[i]) }

}
mymodule(dir, ext, callback);
