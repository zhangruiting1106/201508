/**
 * global全局对象，声明方式有两种：
 * 1.  global.name 全局对象的属性
 * 2.  name  未定义直接赋值
 * 在node中，var name="zt"，表示的是模块内部的变量，而不是全局变量，原理是：每个.js文件都是一个模块，每个模块外面都会包一个函数，进行封装
 */
/** 定义两个全局变量，用以下方式输出的效果都是一样的，说明只要是global的属性，都是可以省略global直接用的
    name = "zt";
    global.age = 8;
    console.log(name);
    console.log(global.name);
    console.log(age);
    console.log(global.age);
 **/
//console.log(global);
console.log(global === global.global);

/**
 * 有一些不是全局变量或者global的属性，但称为伪全局变量，如__filename,__dirname，它们其实都是在模块封装时作为函数的参数而存在的
 * __filename:当前模块的绝对路径
 * __dirname:当前模块的绝对目录
 */
console.log(__dirname); // e:\node\201508\lectures\global
console.log(__filename);// e:\node\201508\lectures\global\global.js

