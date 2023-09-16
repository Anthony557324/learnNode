// 拼接文件路径
// 文件路径本质上（字符串）
import path from "node:path"

const result = path.join(...['/foo', 'package.json'])
// const result = path.join('/foo', 'package.json')
console.log(result)