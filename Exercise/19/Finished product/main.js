var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var action = document.getElementById("action");
var draw = document.getElementById("draw");
var eraser = document.getElementById("eraser");
var clear = document.getElementById("clear");
var down = document.getElementById("down");

var blackcolor = document.getElementById("black");
var redcolor = document.getElementById("red");
var yellowcolor = document.getElementById("yellow");
var bluecolor = document.getElementById("blue");

var lastPoint = { x: undefined, y: undefined };
var nextPoint = { x: undefined, y: undefined };
var flag = false;
var eraserflag = false;
var n = 0;
getcanvasSize();
window.onresize = function(){
    getcanvasSize();
}
function getcanvasSize(){
    var pagewidth = document.documentElement.clientWidth;
    var pageheight = document.documentElement.clientHeight;
    canvas.width = pagewidth;
    canvas.height = pageheight;
}

var elem = document.querySelector('input[type="range"]');
//获取一个想显示值的标签，并且初始化默认值
var target = document.querySelector('.value');
target.innerHTML = elem.value;
drawcircle(190,38,elem.value);
// console.log("2");

var rangeValue = function(){
  var newValue = elem.value;
    // console.log(x);
    clearing(174,25,30,30)
    drawcircle(190,38,newValue);
    target.innerHTML = newValue;
    ctx.lineWidth = newValue;
}

//绑定input监听事件

elem.addEventListener("input", rangeValue);

// ctx.fillRect(0,0,150,150);
// ctx.eraserRect(1, 2 ,60, 60);
draw.onclick = function(){
    if(!eraserflag&n===0){
        action.className = "cutover x"
        n=1;
    }else if(n===1){
        action.className = "cutover"
        n = 0;
    }else if(n===2){
        action.className = "cutover x"
        eraserflag = false;
        n=1;
    }
}

eraser.onclick = function(){
    if(n===0&!eraserflag){
        action.className = "cutover y"
        eraserflag = true;
        n=2;
    }else if(n===2){
        action.className = "cutover"
        eraserflag = false;
        n = 0;
    }else if(n===1){
        action.className = "cutover y"
        eraserflag = true;
        n=2;
    }
}

clear.onclick = function(a){
    var pagewidth = document.documentElement.clientWidth;
    var pageheight = document.documentElement.clientHeight;
    clearing(0,0,pagewidth,pageheight);
}

down.onclick = function(){
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    message = prompt("请为你做的画命名：")
    a.download = message
    a.target = '_blank'
    a.click()
  }

blackcolor.onclick = function(){
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    blackcolor.classList.add('check');
    redcolor.classList.remove('check');
    yellowcolor.classList.remove('check');
    bluecolor.classList.remove('check');
}

redcolor.onclick = function(){
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    redcolor.classList.add('check');
    blackcolor.classList.remove('check');
    yellowcolor.classList.remove('check');
    bluecolor.classList.remove('check');
}

yellowcolor.onclick = function(){
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    yellowcolor.classList.add('check');
    redcolor.classList.remove('check');
    blackcolor.classList.remove('check');
    bluecolor.classList.remove('check');
}

bluecolor.onclick = function(){
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";
    bluecolor.classList.add('check');
    redcolor.classList.remove('check');
    yellowcolor.classList.remove('check');
    blackcolor.classList.remove('check');
}

if(window.ontouchstart===null){
    canvas.ontouchstart = function(a){
        // console.log(a);
        var x = a.touches[0].clientX;
        var y = a.touches[0].clientY;
        if(n!=0&!eraserflag){
            flag = true;
            lastPoint = { x: x, y: y };
        }else if(n!=0&eraserflag){
            // console.log("1");
            flag = true;
            clearing(x,y,10,10);
        }
    }

    canvas.ontouchmove = function(a){
        var x = a.touches[0].clientX;
        var y = a.touches[0].clientY;
        if (!flag) {return}
        if(n!=0&!eraserflag){
            nextPoint = { x: x, y: y };
            drawline(lastPoint.x, lastPoint.y, nextPoint.x, nextPoint.y);
            lastPoint = nextPoint;
        }else if(n!=0&eraserflag){
            // console.log("2");
            clearing(x,y,10,10);
        }
    }

    canvas,ontouchend = function(a){
        flag = false;
    }

}

canvas.onmousedown = function (a) {
    var x = a.clientX;
    var y = a.clientY;
    if(n!=0&!eraserflag){
        flag = true;
        lastPoint = { x: x, y: y };
    }else if(n!=0&eraserflag){
        // console.log("1");
        flag = true;
        clearing(x,y,10,10);
    }
}
canvas.onmousemove = function (a) {
    var x = a.clientX;
    var y = a.clientY;
    if (!flag) {return}
    if(n!=0&!eraserflag){
        nextPoint = { x: x, y: y };
        drawline(lastPoint.x, lastPoint.y, nextPoint.x, nextPoint.y);
        lastPoint = nextPoint;
    }else if(n!=0&eraserflag){
        // console.log("2");
        clearing(x,y,10,10);
    }
}
canvas.onmouseup = function (a) {
    flag = false;
    // clearflag = false;
}

function drawline(a, b, c, d) {
    ctx.beginPath();
    ctx.moveTo(a, b);
    // ctx.lineWidth = 5;
    ctx.lineTo(c, d);
    ctx.stroke();
    ctx.closePath();
}

function drawcircle(a,b,x){
    ctx.beginPath();
    // console.log("4");
    ctx.arc(a,b,x,0,Math.PI*2);
    // console.log("4");
    ctx.fill();
    ctx.closePath();
}

function clearing(x,y,a,b){
    ctx.clearRect(x, y,a,b);
    // console.log("2");
}


