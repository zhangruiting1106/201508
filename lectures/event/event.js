/**
 * 事件：发布订阅模式，也就是观察者模式
 **/
//要引入事件模块和util模块
var EventEmitter = require("events");
//var events = require("events").EventEmitter(); 与上一行一样的效果
var util = require("util");
util.inherits(Girl,EventEmitter);//让Girl继承事件模块原型上的方法，才能使用绑定等功能
function Girl(){

}
function Boy(name,response){
    this.name = name;
    this.response = response;
}
var b1 = new Boy("b1",function(){
    console.log("eat chicken")
});
var b2 = new Boy("b2",function(){
    console.log("eat fish")
});
var b3 = new Boy("b3",function(){
    console.log("eat egg")
});
var girl = new Girl();
//绑定事件
girl.addListener("eleme",b1.response);
girl.addListener("eleme",b2.response);
girl.on("shuileme",b1.response);//on,addListener都是一样的
//发射事件
girl.emit("eleme");
girl.emit("eleme");
//如果事件只想发射一次，则用once进行绑定
girl.once("die",function(){
    console.log("die");
}) ;
girl.emit("die");
girl.emit("die");
//如果想限制监听数量，则
girl.setMaxListeners(2);
//girl.addListener("eleme",b3.response);
girl.emit("eleme");//报错，因为监听数量大于设定的最大值2
//移除监听
girl.removeListener("eleme",b3.response);
girl.removeListener("eleme",b2.response);
girl.removeAllListeners("eleme");//移除所有的监听
girl.emit("eleme");