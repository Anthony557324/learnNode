// 文件offset
import path from 'node:path'
import { fileURLToPath } from "node:url"
import fs from 'node:fs'

// 当前文件的路径
const __filename = fileURLToPath(import.meta.url)
// 当前文件夹的路径
const __dirname = path.dirname(__filename)
const pkgPath = path.join(__dirname,'../upload/name.txt')
const namePath = path.join(__dirname,'../package.json')

const pkgFileStream = fs.createReadStream(pkgPath,{
    // 决定一个nodejs流一次传递多大的buffer
    highWaterMark:2
})
pkgFileStream.on('data',(chunk)=>{
    console.log(chunk)
    // console.log(chunk.toString());
})
pkgFileStream.on('end',()=>{
    console.log('文件读完');
})