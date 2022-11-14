const { response } = require('express');
const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbConn = async() =>{
    let result = await client.connect();
    let database = result.db('GOT')
    return database.collection("targeryen")
}

module.exports = dbConn;