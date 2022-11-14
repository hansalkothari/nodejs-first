module.exports = reqFilter = (req,res,next) =>{
    if(!req.query.age){
        res.send('please provide the age !!')
    }
    else if(req.query.age<18){
        res.send('age must be above 18')
    }
    else
        next() // without next it will not stop reloading.
}
