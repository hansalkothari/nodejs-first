const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//ejs
app.set('view engine','ejs');

// app.get('/', (req, res) => 
// {
//     res.send('Hello World!')
//     console.log('data sent by browes',req.query.name)
// })
const publicPath = path.join(__dirname,'/public')
// app.use(express.static(publicPath)) 
//we need to write .html at end in query like about.html

app.get('/profile',(req,res)=>{
    const user ={
        name:'hansal',
        email:'hansal@gmail.com',
        skills:['react','css','c++','solidity','javascript']
    }
    res.render('profile',{user})
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404page.html`)
})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))