const express = require('express')
const { MongoDBNamespace } = require('mongodb')
const dbConn = require('./mongoConfig')
const mongodb = require('mongodb')
const app = express()
app.use(express.json())

app.get('/',async (req,res) =>{
    // res.send({name:"dany"})
    let data = await dbConn()
    data= await data.find({}).toArray()
    console.log(data)
    res.send(data)
})

app.post('/',async(req,res)=>{
    let data = await dbConn()
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put('/',async(req,res)=>{
    let data = await dbConn()
    // console.log(req.body)
    let result =await data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    res.send({result:"update"})  
})

app.put('/:name',async(req,res)=>{
    let data = await dbConn()
    let result =await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send({result:"update"})  
})

app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    let data = await dbConn()
    let result =await data.deleteOne(
        {_id:new mongodb.ObjectId(req.params.id)},
        
    )
    res.send("done")
})
app.listen(5000)