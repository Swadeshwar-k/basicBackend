const http = require('http')

const server = http.createServer((req, res)=>{
    res.setHeader('content',"json/application")

    if(req.url === "/"){
        res.end("Welcome To HomePAge")
    } else if(req.url === "/about"){
        res.end("welcome to about")
    }else  if(req.url ==="/contact"){
        res.end("welcone to contact page")
    }else if(req.url === "/user"){
        const user = {name:'swa', age:'22', skil:"frontend dev"}
        res.writeHead(200, {'content-type':"json/application"})
        res.end(JSON.stringify(user))
    
    }else{
        res.statusCode === 400
        res.end("404 page not found")
    }

})

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});