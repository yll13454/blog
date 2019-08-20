!function () {
    var css = `/* 
    * 面试官你好，我是XXX
    * 只用文字作做我介绍太单调了
    * 我就用代码来介绍吧
    * 首先准备一些样式
    */

/* 
* 首先准备默认动画
*/
* {
    margin: 0;
    padding: 0;
    transition: all 1s;
}
/* 
* 设置背景颜色
*/
body {
    height: 100vh;
    background-color: #eee;
    display: flex;
}
/* 
* 准备一张信纸
*/
.prewrapper {
    height: 100%;
    width: 50%;
    outline: 1px solid red;
    padding: 16px;
    box-sizing: border-box;
    background-color: white;
    overflow: overlay;
    position: relative;
}

.prewrapper>.thickline {
    border: 8px solid red;
    height: 100vh;
    border-left: transparent;
    border-right: transparent;
    border-bottom: transparent;
}

.prewrapper>.thickline::before {
    content: '';
    display: block;
    border: 1px solid red;
    position: absolute;
    top: 57px;
    left: 17px;
    width: 95%;
}
.prewrapper>.thickline>ol>li {
    display: block;
    border: 1px dotted red;
    margin-top: 26px;
}
h2 {
    text-align: center;
    color: red;
}
/* 
* 然后把代码移动过去，并适配合适
*/
.prewrapper .code {
    position: absolute;
    top: 61px;
    left: 12px;
    bottom:auto;
    font-size: 18px;
    line-height: 28px;
}
/* 
* 接着我们准备一张自我介绍的纸
*/
.paper{
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    width: 50%;
    overflow: overlay;
    padding: 30px;
    background-color:#DECEB3;
}
/* 
* 现在我们打入自我介绍
*/
`


    var md = ` # 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
### 技能介绍
熟悉 JavaScript CSS
### 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
###  联系方式
- **QQ** xxxxxxxx
- **Email** xxxxxxxx
- **手机** xxxxxxx
###  联系方式
- **QQ** xxxxxxxx
- **Email** xxxxxxxx
- **手机** xxxxxxx
###  联系方式
- **手机** xxxxxxx
- **QQ** xxxxxxxx
- **Email** xxxxxxxx
###  联系方式
- **QQ** xxxxxxxx
- **Email** xxxxxxxx
- **手机** xxxxxxx`

    var css2 = `
/* 
* 把自我介绍改的好看些
*/
.paper.content>h1,h3{
    margin: 12px 0;
}
.paper.content>ol,li{
    list-style: none;
}
/* 
* 在加入markdown就完成了，这就是我的会动的简历
*/
`

    let view = document.querySelector('.prewrapper');
    let styleTag = document.querySelector('#styleTag');
    let ol = document.querySelector('.prewrapper .thickline ol');
    let codepage = document.querySelector('.prewrapper .code');
    let codehtml = document.querySelector('.paper .content');

    function writeCode(prefix, preCode, fn) {
        let n = 0;
        let id = setInterval(() => {
            n += 1;
            codepage.innerHTML = prefix + preCode.substring(0, n);
            codepage.innerHTML = Prism.highlight(prefix + preCode.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = prefix + preCode.substring(0, n);
            codepage.scrollTop = codepage.scrollHeight;
            if (n > 1100) {
                view.scrollTop = view.scrollHeight;
            }
            if (n % 17 === 0) {
                let li = document.createElement('li');
                ol.append(li);
            }
            if (n > preCode.length) {
                clearInterval(id);
                fn&fn();
            }
        }, 10)
    }

    function writeHtml(result,preCode,fn) {
        let n = 0;
        let id1 = setInterval(() => {
            n += 1;
            preCode.innerHTML = result.substring(0, n);
            preCode.scrollTop = preCode.scrollHeight;
            // preCode.innerHTML = Prism.highlight(preCode.innerHTML,Prism.languages.md);
            if (n > result.length) {
                clearInterval(id1);
                fn&fn();
            }
        }, 10)
    }

    function mdHtml(result) {
        document.querySelector('.paper').innerHTML = marked(result);
    }

    writeCode('', css, ()=>{
        writeHtml(md,codehtml,
            ()=>{writeCode(css,css2,
                ()=>{mdHtml(md)})
            })
    });

}.call()

