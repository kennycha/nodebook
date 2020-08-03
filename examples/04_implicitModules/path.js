const path = require("path");

const string = __filename;

console.log(path.sep);
console.log(path.delimiter);
console.log("-----");
console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));
console.log(path.basename(string, path.extname(string)));
console.log("-----");
console.log(path.parse(string));
console.log(
  path.format({
    dir: "C:\\users\\kennycha",
    name: "path",
    ext: ".js",
  })
);
console.log(path.normalize("C:\\users\\\\kennycha\\path.js"));
console.log("-----");
console.log(path.isAbsolute("C:\\"));
console.log(path.isAbsolute("./home"));
console.log("-----");
console.log(path.relative("C:\\users\\kennycha\\path.js", "C:\\"));
console.log(path.join(__dirname, "..", "..", "/users", ".", "/kennycha"));
console.log(path.resolve(__dirname, "..", "users", ".", "/kennycha"));
