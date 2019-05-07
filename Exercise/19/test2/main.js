var  canvas = document.getElementById("canvas");
//矩形
if(canvas.getContext){
    console.log("1");
    var context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(100,100,80,80);
    context.clearRect(60, 60, 60, 60);
    context.strokeRect(120,120,80,80);
    // context.fillRect(25, 25, 100, 100);
}
//三角形
if(canvas.getContext){
    console.log("2");
    context.beginPath();
    context.moveTo(130,130);
    context.lineTo(130,230);
    context.lineTo(230,230);
    context.fill();
    context.closePath();
}
//圆形
if(canvas.getContext){
    context.beginPath();
    context.arc(210,190,20,0,Math.PI*2);
    // context.fill();
    context.stroke();
    context.closePath();
}
//直线
if(canvas.getContext){
    console.log("3");
    context.beginPath();
    context.lineWidth = 20;
    context.moveTo(20,20);
    context.lineTo(20,50);
    context.stroke();
    context.closePath();
}