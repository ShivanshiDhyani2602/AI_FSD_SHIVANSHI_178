// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//   if (req.url === "/read-employee") {

//     fs.readFile("employeeData.txt", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("File not found");
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(data);
//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
// });

//write data to empData.json file 

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) => {
//   if(req.url === "/write-employee"){
//     const empData={
//       id: 101,
//       name: "shikha",
//       department: "AI"
//     };

//     fs.writeFile(
//       "empData.json",
//       JSON.stringify(empData,null,2),(err)=>{
//         if(err){
//           res.writeHead(500,{"Content-Type":"text/plain"});
//             res.end("Error writing json file");
//             return;
          
//         }
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.end(JSON.stringify({message:"employee json written successfully"}));
//       }
//     );
//   }
//   else{
//       res.writeHead(404,{"Content-Type":"text/plain"});
//       res.end("route not found");

// }});
// server.listen(3001,() => {
//   console.log("Server running on  http://localhost:3001")
// });

//READING JSON FILE
const http= require("http");
const fs=require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/read") {

    fs.readFile("empData.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File not found");
        return;
      }
      const employee = JSON.parse(data);
      res.writeHead(200,{"Content-Type": "application/json"});
      res.end(JSON.stringify(employee));
    });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});
  const PORT = 3003;
server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}/read`);
});