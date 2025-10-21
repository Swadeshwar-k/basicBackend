
const http = require('http')


const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        const user = {name:'swa', age:'22', skil:"frontend dev"}
        res.writeHead(200, {'content-type':"json/application"})
        res.end(JSON.stringify(user))
    }else{
        res.writeHead(404)
        res.end("404 page not fount")
    }
})

server.listen(4000, ()=>{
    console.log("server start running");
    
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/user') {
//     const user = { name: 'Swadesh', skill: 'Node.js Backend' };
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(user));
//   } else {
//     res.writeHead(404);
//     res.end('Not Found');
//   }
// });

// server.listen(4000, () => {
//   console.log('Server running on http://localhost:4000');
// });
