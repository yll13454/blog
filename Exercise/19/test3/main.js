var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var action = document.getElementById("action");
var draw = document.getElementById("draw");
var clear = document.getElementById("clear");
var lastPoint = { x: undefined, y: undefined };
var nextPoint = { x: undefined, y: undefined };
var flag = false;
var clearflag = false;
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
// ctx.fillRect(0,0,150,150);
// ctx.clearRect(1, 2 ,60, 60);
draw.onclick = function(){
    if(!clearflag&n===0){
        action.className = "cutover x"
        n=1;
    }else if(n===1){
        action.className = "cutover"
        n = 0;
    }
}

clear.onclick = function(){
    if(n===0&!clearflag){
        action.className = "cutover y"
        clearflag = true;
        n=2;
    }else if(n===2){
        action.className = "cutover"
        clearflag = false;
        n = 0;
    }
}

canvas.onmousedown = function (a) {
    var x = a.clientX;
    var y = a.clientY;
    if(n!=0&!clearflag){
        flag = true;
        lastPoint = { x: x, y: y };
    }else if(n!=0&clearflag){
        console.log("1");
        flag = true;
        clearing(x,y);
    }
}
canvas.onmousemove = function (a) {
    var x = a.clientX;
    var y = a.clientY;
    if (!flag) {return}
    if(n!=0&!clearflag){
        nextPoint = { x: x, y: y };
        drawline(lastPoint.x, lastPoint.y, nextPoint.x, nextPoint.y);
        lastPoint = nextPoint;
    }else if(n!=0&clearflag){
        console.log("2");
        clearing(x,y);
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

function drawcircle(a,b){
    ctx.beginPath();
    ctx.arc(a,b,10,0,Math.PI*2);
    ctx.closePath();
}

function clearing(x,y){
    ctx.clearRect(x-5, y-5, 10, 10);
    // console.log("2");
}