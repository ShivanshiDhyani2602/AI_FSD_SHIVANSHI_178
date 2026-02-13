const path = require("path");

// //current dir li
// const filePath=path.join(__dirname,"files","abcd.txt"); //jo bhi string provide krenge wo join hokepath mai convert hojayega
// console.log(filePath);

//if desktop pe hai files

const filePath=path.join(
    __dirname,
    "..", //previous dir
    "..", //after this desktop pe agye
    "file",
    "abcd.txt"
);
console.log(filePath);

console.log(path.basename(filePath));
console.log(path.extname("employee.pdf"));
console.log(path.resolve("files","data.txt")); // generates absolute path

