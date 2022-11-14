const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(`${dirPath}/apple.txt`,'this is a simple test file')
// fs.readFile(filePath,(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,` and file name is apple`,(err)=>{
//     if(!err)
//         console.log(`file is updated`)
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file name is updated')
// })// deleted the file name apple and creates another file with same content with name fruit

fs.unlinkSync(`${dirPath}/fruit.txt`)//deleted the file
