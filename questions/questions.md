# 关于读取文件时的目录
- fs.readFile("path","utf-8",function(err,data){console.log(data)});
  path中./ , ../ , . , / 都有什么区别
  path都是从自己所处位置开始找，看其它的文件与它之间是什么位置关系
  ./     当前目录
  ../    上一级目录
  /      根目录,也就是指的localhost:8080
  
#forEach()的具体用法
#with()的具体用法
#node中的全局变量与局部变量
  
