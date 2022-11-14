const dbConn = require('./mongoConfig')
let dragons = new Array()

//finding all the documents with query
//getData()
// console.log(dbConn())

// dbConn().then((resp)=>{
//     console.warn( resp.find().toArray().then((data)=>{
//         console.log(data)
//     }))
// }
// )


const getAllTheDragons = async() =>{
    let data = await dbConn()
    await data.find().toArray().then((list)=>{
        list.forEach(async(i) =>{
            console.log(i.dragon)
        })
    });
    
}
getAllTheDragons()
