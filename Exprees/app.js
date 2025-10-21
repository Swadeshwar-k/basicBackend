const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send("hi, i'm from expresss");
    

})
app.get('/about',(req,res)=>{
    res.send("about")
})

app.get('/contact',(req,res)=>[
    res.send("contact")
])

app.get('user',(req,res)=>{
    res.json({
        name:"swadeshwar",
        age:22,
        skill:"frontend"
    })
})


app.listen(3000, ()=>{
    console.log("server start running");
    
})