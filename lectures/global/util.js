var util = require("util");
function Parent(name){
    this.name = name;
    this.age = 4;
    this.say = function(){
        console.log("hello",this.name);
    }
}
/*function Child(){
    this.name = "child";
}*/
util.inherits(Child,Parent); // 实现对象间原型继承,只继承父类原型上的方法，不继承父类私有的属性
var child = new Child('zt');
//想让child也继承到Parent上的私有属性，则这样写：
function Child(name){
    Parent.call(this,name);
    //Parent.apply(this,[arg1,arg2]);
    this.name = name;
}
console.log(child.name);
console.log(child.age);
child.say();

function Person(){
    this.name = "person";
    this.toString = function(){
        return this.name;
    }
}
var p = new Person();
console.log(util.inspect(p,{showHidden:true,depth:1}));//util.inspect，输出的是p这个对象的内容，以字符串的形式

util.isArray([]);
util.isRegExp(/\d/);
//......