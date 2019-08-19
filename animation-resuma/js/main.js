!function () {
    var css = `/* 
    * 面试官你好，我是XXX
    * 只用文字作做我介绍太单调了
    * 我就用代码来介绍吧
    * 首先准备一些样式
    */
    
* {
    margin: 0;
    padding: 0;
    transition: all 1s;
}

body {
    height: 100vh;
    background-color: #eee;
    display: flex;
}

h2 {
    text-align: center;
    color: red;
}

.prewrapper {
    height: 100%;
    width: 50%;
    outline: 1px solid red;
    padding: 16px;
    box-sizing: border-box;
    background-color: white;
    overflow: scroll;
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
.code {
    font-size: 18px;
    line-height: 28px;
    position: absolute;
    top: 61px;
    left: 12px;
}

.paper{
    flex: 1;
    height: 100%;
    width: 50%;
    overflow: overlay;
}`


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



    let view = document.querySelector('.prewrapper');
    let controller = {
        view: null,
        styleTag: null,
        ol: null,
        codepage: null,
        codehtml: null,
        init: function (view,css1,css2,md) {
            this.view = view;
            this.bindEvents();
            this.writeCode(css1,css2,md)
        },
        bindEvents: function () {
            let styleTag = document.querySelector('#styleTag');
            this.styleTag = styleTag;
            let ol = document.querySelector('.prewrapper .thickline ol');
            this.ol = ol;
            let codepage = document.querySelector('.prewrapper .code');
            this.codepage = codepage;
            let codehtml = document.querySelector('.paper .content');
            this.codehtml = codehtml;
        },
        writeCode: function (prefix, preCode,md) {
            let n = 0;
            let id = setInterval(() => {
                n += 1;
                this.codepage.innerHTML = prefix + preCode.substring(0, n);
                this.codepage.innerHTML = Prism.highlight(prefix + preCode.substring(0, n), Prism.languages.css);
                // this.styleTag.innerHTML = preCode.substring(0, n);
                this.codepage.scrollTop = this.codepage.scrollHeight;
                if (n % 20 === 0) {
                    let li = document.createElement('li');
                    this.ol.append(li);
                }
                if (n > preCode.length) {
                    clearInterval(id);
                    this.writeHtml(md,this.codehtml)
                }
            }, 10)
        },
        writeHtml: function (result, preCode) {
            let n = 0;
            let id1 = setInterval(() => {
                n += 1;
                preCode.innerHTML = result.substring(0, n);
                preCode.scrollTop = preCode.scrollHeight;
                // preCode.innerHTML = Prism.highlight(preCode.innerHTML,Prism.languages.md);
                if (n > result.length) {
                    clearInterval(id1);
                    document.querySelector('.paper').innerHTML = marked(result)
                }
            }, 10)
        }
    }
    controller.init(view,'',css,md);
}.call()

