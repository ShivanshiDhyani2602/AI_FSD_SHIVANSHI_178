// const fs =require("fs");

// fs.readFile("data.txt","utf8",(err,data) =>{
//     if(err){
//         console.log("Error reading this file: ",err.message); //by default async (non blocking)
//         return;
//     }
//     console.log("File content: ",data);
// });

// console.log("request 2d data from the file");
// console.log("request 3d data from the file");

//------------------------------READING SYNC---------------------------------------------------

// const fs = require("fs");
// //blocking ..if already one request is being processed then the upcoming requests are blocked 

// // file sync does not accept a callback funtion hence 3rd requets is ignored 
// try{
//     const data = fs.readFileSync("data.txt","utf-8"); //khud exception handling we have to do 
//     console.log("file Content: ",data);
// }
// catch(err){
//     console.log("error reading file",err.message);
// }

// console.log("This works after file read is complete");
// console.log("request 2nd data from the file");
// console.log("Request 3r data from the file");

//---------------------------WRITING FILE(ASYNC)---------------------------------------------------

// const fs=require("fs");

// fs.writeFile("code.txt","Hello welcome",(err)=>{
//     if(err){
//         console.log("Error: ",err.message);
//         return ;
//     }
//     console.log("File written successfully");
// });

//------------------------------APPEND(async/sync)-------------------------------------------------------------
// const fs=require("fs");
// fs.appendFile("data.txt","\new employee added",(err)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log("data Appended");
// });

//----------------------------DELETE------------------------------------
// const fs= require("fs");
// fs.unlink("data.txt",(err)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log("File deleted");
// });

//------------------------------------RENAME------------------------------
// const fs = require("fs");

// fs.rename("code.txt","coder.txt",(err)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log("File renamed");
// });

//----------------------make folder-----------------------------

const fs = require("fs");

fs.mkdir("employees",(err)=>{
    if(err){
        throw err;
    }
    console.log("Folder created");
});