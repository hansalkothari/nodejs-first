const http = require('http')
const data = require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'applicaton\json'})
    res.write(JSON.stringify(data))
    res.end()
}).listen(5000)