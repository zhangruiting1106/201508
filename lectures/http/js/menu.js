window.onload = function(){
    var oBtn = document.getElementById("btn");
    oBtn.addEventListener("click",function(){
        alert("点我干什么？");
    });
    setInterval(function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","/clock",true);
        xhr.onload = function () {
            if(this.status == 200){
                document.querySelector("#clock").innerHTML = this.responseText;
            }
        };
        xhr.send();
    },1000);
};