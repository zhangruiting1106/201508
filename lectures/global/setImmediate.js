/**
 * 在所有异步方法中，nextTick的优先级最高，然后是setImmediate,setTimeout,fs操作
 * 要注意的是，同步操作肯定最先执行，这些异步操作都要等同步操作完成以后，在下个事件循环中执行
 */
var fs = require("fs");
process.nextTick(function(){
    console.log("nextTick1");
});
process.nextTick(function(){
    console.log("nextTick2");
});
fs.readFile("1.txt","utf-8", function (err,data) {
    console.log(data);
});
setImmediate(function(){
    console.log("setImmediate1");
    setImmediate(function(){
        console.log("setImmediate2");
        process.nextTick(function(){
            console.log("nextTick3");
        })
    })
});
