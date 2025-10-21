
const http = require("http")

const server = http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"Text"})
    res.end("Hello from i'm swadeshwar")

})

server.listen(3000,()=>{
    console.log("server is running from 3000 port");
    
})