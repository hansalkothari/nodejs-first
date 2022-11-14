const app = require('./app')

console.log('welocome aboard !!')
//.log .warn .error
console.log(app.x)
console.log(app)

// dope interview question
const arr = [1,2,23,12,34,13]
var newarr = arr.filter((item)=>{
    return item%2===0
})
console.log(newarr)
