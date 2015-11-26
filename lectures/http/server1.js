var http = require("http");
var url = require("url");
var menus = [{name:"果汁",unit:"瓶"},{name:"木耳",unit:"堆"},{name:"鸡蛋",unit:"个"}];
function makeMenu() {
    var str = "<ul>";
    for (var i = 0; i < menus.length; i++) {
        str += "<li><a href='/" + menus[i].name + "?unit="+menus[i].unit+"'>" + menus[i].name + "</a></li>";
    }
    str += "</ul>";
    return str;
}
var server = http.createServer(function (request, response) {
    var urlObj = url.parse(decodeURIComponent(request.url),true);//parse是将一个URL字符串转换成对象并返回,true表示把其中的查询字符串转成对象
    console.log(urlObj);
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    if (urlObj.pathname == "/") {
        response.end(makeMenu());
    } else {
        response.end("这是一"+urlObj.query.unit+urlObj.pathname.slice(1));
       // response.end("这是一份"+decodeURIComponent(url).slice(1));//decodeURIComponent(url) 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
        }
});
server.listen(8080, "localhost", function () {
    console.log("hello world");
});

    /**  urlObj对象中几个重要的内容：
    search: '?unit=2',
    query: 'unit=2',
    pathname: '/',
    path: '/?unit=2',
    **/