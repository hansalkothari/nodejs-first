const dbConn =require('./mongoConfig')

// same as update and insert
// deleteOne and deleteMany functions are here

const deleteRecord = async() =>{
    const data = await dbConn()
    
    // since leona viserion is dead in house of the dragons
    // RIP Leona
    // We will delete her name from the collection

    const result = await data.deleteOne({name:"leona"})
    console.log(`${result.deletedCount} records have been deleted`)
    console.log(result.acknowledged)
}

deleteRecord()
