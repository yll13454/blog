// 1. 初始化数据
var key1 = init();
var keys = key1.keys;
var hash = key1.hash;

// 2. 生成键盘
generateKeyboard(keys, hash) ;

// 3. 监听用户动作
listenToUser(hash);

// 工具函数
function init() {
    var hash = {
        'q': 'qq.com', 'w': 'weibo.com',
        'e': 'ebay.com', 'r': undefined,
        't': 'taobao.com', 'y': undefined,
        'u': 'uc.cn', 'i': 'iqiyi.com',
        'o': 'opera.com', 'p': undefined,
        'a': undefined, 's': undefined,
        'd': undefined, 'f': undefined,
        'g': undefined, 'h': undefined,
        'j': undefined, 'k': undefined,
        'l': undefined, 'z': undefined,
        'x': undefined, 'c': undefined,
        'v': undefined, 'b': undefined,
        'n': undefined, 'm': undefined
    }

    var keys = {
        0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        3: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        length: 4
    }

    if (localStorage.getItem("hash") || null) {
        hash = getLocalStorageItem("hash");
    }

    return {
        'keys': keys,
        'hash': hash
    }

}

function getLocalStorageItem(name) {
    return JSON.parse(localStorage.getItem(name) || null);
}

function tap(tapName, attributes) {
    var element = document.createElement(tapName);
    for (var key in attributes) {
        element[key] = attributes[key];
    }
    return element;
}

function generateKeyboard(keys, hash) {
    var maindiv = document.getElementById('maindiv');

    for (var index = 0; index < keys.length; index++) {
        var div1 = tap('div', { className: 'row' });
        maindiv.appendChild(div1);

        for (var index2 = 0; index2 < keys[index].length; index2++) {
            var kbd = tap('kbd', { textContent: keys[index][index2]});
            
            var img1 = createImage(hash[keys[index][index2]]);

            var button1 = createButton(keys[index][index2]);
        
            kbd.appendChild(img1);
            kbd.appendChild(button1);
            div1.appendChild(kbd);
        }
    }
}

function createImage(herf){
    var img1 = tap('img');
    if (herf) {
        img1.src = "http://www." + herf + "/favicon.ico";
    } else {
        img1.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img1.onerror = function (xxx) {
        xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img1;
}

function createButton(id1){
    var button1 = tap('button', { id: id1, textContent: '编辑' });
    button1.onclick = function (word) {
        var herf1 = prompt("请输入网址：");
        var n = word['target']['id'];
        hash[n] = herf1;
        var hash1 = JSON.stringify(hash);
        localStorage.setItem("hash", hash1);

        var img2 = button1.previousSibling;
        console.log(img2);
        img2.src = "http://" + herf1 + "/favicon.ico";
        img2.onerror = function (xxx) {
            xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
        }
    }
    return button1;
}

function listenToUser(name){
    document.onkeypress = function(event){
        var keys1 = event.key;
        window.open("http://"+"www."+name[keys1]);   
    }
}
