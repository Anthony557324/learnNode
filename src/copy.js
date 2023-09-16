import path from 'node:path'
import { fileURLToPath } from "node:url"
import fs from 'node:fs'

// 当前文件的路径
const __filename = fileURLToPath(import.meta.url)
// 当前文件夹的路径
const __dirname = path.dirname(__filename)
const sourceFilePath = path.join(__dirname,'../package.json')
const distFilePath = path.join(__dirname,'../upload/name.txt')

// 文件处理
fs.readFile(sourceFilePath,(err,data)=>{
    const pkgStr = data.toString('utf-8')
    const pkg = JSON.parse(pkgStr)
    fs.writeFile(distFilePath,data,{flag:'w+'},()=>{
        console.log('复制成功');
    })
})

// TODO:
// 1.copy实现
// node copy.js ./package.json src/
// 2.把常用api过一遍
// 创建文件夹 mkdir
// 删除文件夹 rmdir 递归删除
// 删除文件 unlink
// 文件复制 copy