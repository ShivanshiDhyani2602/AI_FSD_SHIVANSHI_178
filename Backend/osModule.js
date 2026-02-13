const os= require("os");

console.log(os.platform());
console.log(os.arch());//architechture
console.log(os.cpus());//core details info
console.log(os.cpus().length);//no of cores
console.log(os.freemem());//free memory
console.log(os.totalmem());//total memory
console.log(os.hostname());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.uptime());