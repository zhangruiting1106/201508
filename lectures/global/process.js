//process：进程对象
console.log(process.argv);//返回命令行脚本的各个参数组成的数组
//console.log(process.env);//指向当前shell的环境变量，比如process.env.path。
console.log(process.env.path);//path的位置是：控制面板--系统和安全--系统--高级系统设置--高级--环境变量
console.log(process.env.enva);//注意：process.env后面的属性可以自定义，但自定义的默认值为undefined，如果想有确定的值，需要先自己在cmd里指定，set enva=dev
var enva = process.env.enva;//在这里自定义属性，然后去cmd里设置
if(enva == "dev"){
    console.log("dev");
}//满足条件后输出dev
console.log(process.pid);
process.stdin.on("data",function(data){
    process.stdout.write("data",data);
});
//process.kill(5444);//5444是pid，用来杀死一个进程，但这只是给该进程发出了杀死的信息，至于会不会把进程杀死，要看进程本身的意愿
console.log(process.cwd());//返回运行当前脚本的工作目录的路径：e:\node\201508\lectures\global
//process.chdir("这里是路径");//改变工作目录
process.chdir("../");// 或process.chdir("..");
console.log(process.cwd());
console.log(process.memoryUsage());//内存占用量
//{
// rss: 17104896, 常驻内存
// heapTotal: 9751808, 堆的总量
// heapUsed: 4120128  堆的使用量
// }
