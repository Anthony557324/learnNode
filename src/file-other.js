import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import { rejects } from 'node:assert'

// 当前文件的路径
const __filename = fileURLToPath(import.meta.url)
// 当前文件夹的路径
const __dirname = path.dirname(__filename)
const uploadPath = path.join(__dirname, '../upload/name.txt')

// 虽然不会阻塞nodejs主线程
// 但是对于大文件的读取会有性能问题

fs.readFile(uploadPath,{flag:'r'},(err,buf)=>{
    console.log(buf.toString());
})

const fileBuf = fs.readFileSync(uploadPath)
console.log(fileBuf);

// 依然保持异步，但是想使用promise
function readFilePromise(filePath,option){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath,option,(err,buf)=>{
            if(err){}
        })
    })
}