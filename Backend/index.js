const http=require("http");
const server=http.createServer((req,res)=> {
    res.end("This is our first server\n");
});

const PORT=3002;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});