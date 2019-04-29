var hash={
'q':'qq.com',
'w':'weibo.com',
'e':'ebay.com',
'r':undefined,
't':'taobao.com',
'y':'yahoo.com',
'u':'uc.com',
'i':'iqiyi.com',
'o':'opera.com',
'p':undefined,
'a':undefined,
's':undefined,
'd':undefined,
'f':undefined,
'g':undefined,
'h':undefined,
'j':undefined,
'k':undefined,
'l':undefined,
'z':undefined,
'x':undefined,
'c':undefined,
'v':undefined,
'b':undefined,
'n':undefined,
'm':undefined
}

var keys ={
    0:['1','2','3','4','5','6','7','8','9','0'],
    1:['q','w','e','r','t','y','u','i','o','p'],
    2:['a','s','d','f','g','h','j','k','l'],
    3:['z','x','c','v','b','n','m'],
    length:4
}
// console.log(keys[0][3]);
if(localStorage.getItem("hash")||'null'){
    var hash2 = localStorage.getItem("hash");
    hash = JSON.parse(hash2);
}

var maindiv = document.getElementById('maindiv');

var index = 0;
while(index<keys.length){
    var div1 = document.createElement('div');
    maindiv.appendChild(div1);
    var index2=0
    while(index2<keys[index].length){
        var kbd = document.createElement('kbd');
        div1.appendChild(kbd);
        kbd.textContent = keys[index][index2];
        // console.log(keys[index][index2]);
        var button1 = document.createElement('button');
        button1.textContent = '编辑';
        kbd.appendChild(button1);
        button1.id = keys[index][index2];
        button1.onclick =function(word){
            var herf1 = prompt("请输入网址：");
            var n = word['target']['id'];
            hash[n] = herf1;
            var hash1 = JSON.stringify(hash);
            localStorage.setItem("hash",hash1);
            // console.log(hash1);
        }
        index2 = index2+1;
    }
    index=index+1;
}

document.onkeypress = function(event){
    // console.log(event);
    var keys1 = event.key;
    console.log(keys1);
    window.open("http://"+"www."+hash[keys1]);   
}


