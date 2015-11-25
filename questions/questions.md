# 关于读取文件时的目录
- fs.readFile("path","utf-8",function(err,data){console.log(data)});
  path中./ , ../ , . , / 都有什么区别
  ./     当前目录
  ../    上一级目录
  /      根目录
