/**
 * bind:可以用call或apply改变被调用函数的上下文，但如果重复使用会不方便，因为每次都要把上下文对象作为参数传递，而且还会使代码变得不直观。针对这种情况，我们可以使用bind方法永久地绑定函数的上下文，使其无论被谁调用，上下文都是固定的。bind语法如下：
 func.bind(thisArg[,arg1[,arg2[, ...]]]);
 */
/**
 * nextTick:在事件循环的下一个循环中调用callback，在所有同步方法执行完成后才执行此回调
 */
var fs = require("fs");
fs.readFile("1.txt","utf-8", function (err, data) {
    console.log(data);
});
process.nextTick(say.bind(this,"nextTick"));
setTimeout(say.bind(this,"setTimeout"),0);

function say(name){
    console.log(name,"hello");
    process.nextTick(function(){
        console.log(name,"next hello");
    })
}
