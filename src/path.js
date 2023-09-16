// 拼接文件路径
// 文件路径本质上（字符串）
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

// 当前文件的路径
const __filename = fileURLToPath(import.meta.url)
// 当前文件夹的路径
const __dirname = path.dirname(__filename)

const anotherPath = path.join(__dirname)
// console.log(__dirname)
// console.log(__filename)
console.log(anotherPath)

// const result = path.join(...['/foo', 'package.json'])
// // 等价于 const result = path.join('/foo', 'package.json')
// console.log(result)

// 进程的启动路径
console.log(process.cwd())
// 改变进程的运行路径
process.chdir(__dirname)
console.log(process.cwd())

console.log(process.argv[2])
