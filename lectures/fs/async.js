var fs = require('fs');
/*console.log("a");
//fs.readFileSync('test1.js',"utf-8"); //同步读取
fs.readFile("../test1.js","utf-8",function(err,data){
    console.log(data);
});//异步的读取，放在最后输出，要注意的是，读取的文件路径不要写错
//如果一个程序里出现了多个异步读取的代码，如何判断执行的先后顺序？
//哪个先读取完，先执行哪个。
console.log("b");*/

//需求：异步读取两个文件，都读取完成后执行一个函数，输出"两个文件都已读取完成".（由于异步读取时，执行的先后顺序是看哪个文件更快，所以这里并不知道准确的执行顺序，需要进行判断，设置一个变量）
var count = 0;
fs.readFile("../test1.js","utf-8",function(err,data){
    console.log(data);
    count++;
    if(count == 2){
        over();
    }
});
fs.readFile("../test2.js","utf-8",function(err,data){
    console.log(data);
    count++;
    if(count == 2){
        over();
    }
});
function over(){
    console.log("两个文件都已读取完成");
}