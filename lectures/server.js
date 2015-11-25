var http = require("http");
var server = http.createServer(function (request, response) {
    response.write("hello");
    response.end();//一定要写，表示结束响应，不然网站会一直处于加载中无法正常显示
});//request中存放的是客户端向服务器发送的请求数据
server.listen(8080,"localhost",function(){
    console.log("server is ok");
});//listen监听8080端口，localhost代表本地，如果是百度，则可写成baidu.com,也就是写域名