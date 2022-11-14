//handles request and responses in nodejs


const http = require('http')
// console.log(http.METHODS)

//we need to pass request and response.
http.createServer((req,res)=>{
    res.write("<h2> use your head idiot!! </h2>") // why does h1 works but h2 didn't??
    res.end()
}).listen(5000)

//use npm init to create node_modules folder
// to recover node_module foldr just write npm install in cli
// never push node_modules to github
