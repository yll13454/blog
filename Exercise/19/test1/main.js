var xxx = document.getElementById('canvas');
var flag = false;

xxx.onmousedown = function(yyy){
    // console.log(yyy);
    flag = true;
    var x = yyy.clientX;
    var y = yyy.clientY;
    var div = document.createElement('div');
    div.style = "width:8px;height:8px;border-radius:4px;"+"position:absolute;left: "+(x-4)+"px;top: "+(y-4)+"px;background:black;";
    xxx.appendChild(div);
}

xxx.onmousemove = function(a){
    if(flag){
    var x = a.clientX;
    var y = a.clientY;
    var div = document.createElement('div');
    div.style = "width:8px;height:8px;border-radius:4px;"+"position:absolute;left: "+(x-4)+"px;top: "+(y-4)+"px;background:black;";
    xxx.appendChild(div);
    }
}

xxx.onmouseup =function(a){
    flag = false;
}