const dbconn = require('./mongoConfig')
const insert = async() =>{
    const db = await dbconn();
    const result =await db.insertOne(
        {
            name:"viserys",
            dragon:"balerion the black dread"
        }
    )
    console.log((await result).acknowledged)
 
}
insert()