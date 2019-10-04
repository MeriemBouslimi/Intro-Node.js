

module.exports = function (dirName, extStr, args) {
    let fs = require("fs");
    let path = require("path");

    let arr = [];

    fs.readdir(dirName, function callback(err, data) {
        if (err) { return args(err) };

        let l = data.length;
        for (let i = 0; i < l; i++) {
            let x = data[i];
            let y = path.extname(x);
            if (y == "." + extStr) { arr.push(x); }
        }
        return args(null, arr);
    })
}