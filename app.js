// this is wrong
// export let x = 10;
// export let y=20;

const fs = require('fs')//put it anywhere in the code ,this will run the same way.!!
console.log(__dirname) 
const filename = __filename.split('/').slice(-1)[0] // returns name of the fil
console.log(filename)
fs.writeFileSync('newfile.txt','this is my file , get the hell out of here!!')
fs.writeFileSync('newfile.txt','new data entered')
//after doing that the previously entered data actually got deleted and replace by the new one.


module.exports={
    x:10,
    y:10,
    z:function(){
        return 'hello i am z the function'
    },
}