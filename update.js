const dbconn = require('./mongoConfig')
const updateData = async() =>{
    console.log("first")
    const data =  await dbconn();
    const result =await data.updateOne(
        {name:"viserys"},{
        $set:{dragon:"Balerion",}
        },
        
    ) 
    console.log(result)
}   
updateData()