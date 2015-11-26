var http = require("http");
var url = require("url");
var fs = require("fs");
var mime = require("mime");
var menus = [{name:"果汁",unit:"瓶"},{name:"木耳",unit:"堆"},{name:"鸡蛋",unit:"个"}];
function makeMenu() {
    var str = "<ul>";
    for (var i = 0; i < menus.length; i++) {
        str += "<li><a href='/mu" + menus[i].name + "?unit="+menus[i].unit+"'>" + menus[i].name + "</a></li>";
    }
    str += "</ul>";
    return str;
}
var server = http.createServer(function(request,response){
    var urlObj = url.parse(decodeURIComponent(request.url),true);
    if(urlObj.pathname == "/"){
        response.setHeader("Content-Type","text/html;charset=utf-8");
        var content = fs.readFileSync("menu.html","utf-8");//如果不指定编码，默认读出来的是二进制格式
        //console.log(content);
        content = content.replace("@@@@",makeMenu());
        response.end(content);
    }else if(urlObj.pathname == "/favicon.ico"){
        response.end("404");
        return;
    }else if(urlObj.pathname == "/clock"){
        response.end(new Date().toUTCString());
    }else if(urlObj.pathname.indexOf("/mu") == 0){
        response.setHeader("Content-Type","text/html;charset=utf-8");
        response.end("这是一"+urlObj.query.unit+urlObj.pathname.slice(3));
    }else{
        var filename = urlObj.pathname.slice(1);
        response.setHeader("Content-Type",mime.lookup(filename)+";charset=utf-8");
        var content = fs.readFileSync(filename,"utf-8");
        response.end(content);
    }
});
server.listen(8080,"localhost", function () {
    console.log("start");
});