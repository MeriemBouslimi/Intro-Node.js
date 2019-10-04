let fs = require("fs");
let path = require("path");
let ext = process.argv[3];
let dir = process.argv[2];
fs.readdir(dir, function callback(err, list) {
    if (err) { return err }

    let l = list.length;
    for (let i = 0; i < l; i++) {
        let x = list[i]
        let y = path.extname(x);
        if (y == "." + ext) {
            console.log(x);
        }

    }

})
