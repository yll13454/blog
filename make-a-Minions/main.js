!(function(){
    let styleTag = document.getElementById('styleTag');
    let content = document.querySelector('.content');
    function writeCode(prefix,code,fn){
        let n = 0;
        let id = setInterval(()=>{
            n +=1;
            content.innerHTML = prefix +code.substring(0,n);
            styleTag.innerHTML = prefix +code.substring(0,n);
            content.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            content.scrollTop = content.scrollHeight;
            console.log(code.length)
            console.log(n);
            if(n >= code.length){
                console.log(2);
                clearInterval(id);
                fn && fn();
            }
        },10)
    }
    let code = `
    /*
    *我们现在开始画一个小黄人
    */
    
    /*
    *首先准备一张画纸
    */
    .minion{
        width: 50%;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: #EC7E65;
    }
    
    /*
    *画出小黄人的身体
    */
    
    .minionbody{
        height:360px;
        width: 218px;
        background-color: #FFED41;
        border-radius: 180px 180px 109px 109px;
        position: relative;
    }
    
    /*
    *画出小黄人的眼睛
    */
    
    .glasses .glassesline1,
    .glasses .glassesline2{
        height: 12px;
        width: 238px;
        background-color: #494949;
        border-radius: 10px;
        position: absolute;
        top: 98px;
        left: -10px;
    }
    
    .glasses .glassesline2{
        top: 111px;
        left: -10px;
        background-color: #2D2D2D;
    }
    
    .glasses .glassleft,
    .glasses .glassright{
        height:102px;
        width:102px;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: #E5BF36;
        border: 14px solid #E2E2E0;
        position: absolute;
        top: 58px;
        left: 1px;
        box-shadow: -2px 5px 2px #E0D03F;
    }
    
    .glasses .glassright{
        left: 114px;
    }
    
    .glasses .glassleft::before,
    .glasses .glassright::before
    {
        content: '';
        display: block;
        width: 74px;
        height: 58px;
        background-color: white;
        position: absolute;
        top: 8px;
        border-radius: 25px;
    }
    
    .glasses .glassleft .eyeleft,
    .glasses .glassright .eyeright
    {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #724C25;
        position: absolute;
        top: 32px;
        right: 12px;
    }
    
    .glasses .glassright .eyeright{
        right: 34px;
    }
    
    .glasses .glassleft .eyeleft::before,
    .glasses .glassright .eyeright::before
    {
        content: '';
        display: block;
        position: absolute;
        height: 12px;
        width:12px;
        border-radius: 50%;
        background-color: #2C2D2F;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -6px 0px 0px -6px;
    }
    
    .glasses .glassleft .eyeleft::after,
    .glasses .glassright .eyeright::after
    {
        content: '';
        display: block;
        position: absolute;
        height: 8px;
        width:8px;
        border-radius: 50%;
        background-color: #FFFFFF;
        top: 50%;
        left: 50%;
        margin: -6px 0px 0px 0px;
    }
    
    /*
    *画出小黄人的嘴巴
    */
    
    .mouth{
        width: 106px;
        height:36px;
        background-color: #603814;
        position: absolute;
        top: 182px;
        left:55px;
        border-radius: 0 0 120px 120px;  
    }
    
    .mouth::before{
        content: '';
        display: block;
        background-color: #FFED41;
        height: 10px;
        border-radius: 0 0 150px 150px;
    }
    
    /*
    *画出小黄人的牙齿
    */
    
    .mouth>ul{
        list-style: none;
        display: flex;
        justify-content: center;
    }
    
    .mouth>ul>li{
        display: block;
        width: 20px;
        height: 15px;
        background-color: white;
        border-radius: 0 0 10px 10px;
    }
    
    .mouth>ul>li:nth-child(1),
    .mouth>ul>li:nth-child(4)
    {
        height: 10px;
    }
    
    /*
    *画出小黄人的衣服
    */
    
    .beltleft,
    .beltright{
        width: 70px;
        height: 16px;
        background-color: #224467;
        position: relative;
        top: 225px;
        z-index: 1;
    }
    
    .beltleft{
        transform: rotate(24deg);
        left: -5px;
        border-radius: 0 0 0 14px;
    }
    
    .beltright{
        top: 210px;
        left: 154px;
        transform: rotate(-24deg);
        border-radius: 0 0 14px 0;
    }
    
    .beltleft::after,
    .beltright::after{
        content: '';
        display: block;
        width: 11px;
        height: 11px;
        background-color: #2D2D2B;
        position: absolute;
        left: 56px;
        top: 3px;
    }
    
    .beltright::after{
        left: 1px;
    }
    
    .pants{
        position: absolute;
        height: 66px;
        background-color: #2B5B89;
        width: 100%;
        border-radius: 0 0 109px 109px;
        bottom: 0;
    }
    
    .pants::before{
        content: '';
        display: block;
        background-color: #2B5B89;
        height: 58px;
        width: 138px;
        position: absolute;
        top: -58px;
        right: 42px;
        border-radius: 24px 24px 0 0;
    }
    
    .pants::after{
        content: '';
        display: block;
        position: absolute;
        top: -27px;
        right: 80px;
        height: 44px;
        width: 58px;
        background-color: #224467;
        border-radius: 0 0 20px 20px;
    }
    
    /*
    *画出小黄人的小粗腿
    */
    
    .leg>.legleft,
    .leg>.legright{
        background: #224467;
        height: 22px;
        width: 44px;
        position: absolute;
        top: 358px;
        left: 64px;
        border-radius: 0 0 0 29px;
    }
    
    .leg>.legright{
        left: 112px;
        border-radius: 0 0 29px 0;
    }
    
    /*
    *画出小黄人的鞋子
    */
    
    .leg>.shoeleft,
    .leg>.shoeright{
        background-color: #424242;
        width: 52px;
        height: 18px;
        position: absolute;
        top: 376px;
        left: 56px;
        border-radius: 20px 0 0 4px;
    }
    
    .leg>.shoeright{
        left: 112px;
        border-radius: 0 20px 4px 0;
    }
    
    .leg>.shoeleft::before,
    .leg>.shoeright::before{
        background-color: #2d2d2d;
        width: 53px;
        height: 5px;
        position: absolute;
        content: "";
        top: 18px;
        left: -1px;
        border-radius: 6px;
    }
    
    .leg>.shoeright::before{
        left: 0px;
    }
    
    /*
    *画出小黄人的手臂
    */
    
    .hands>.handleft,
    .hands>.handright{
        background-color: #e5c034;
        height: 100px;
        width: 16px;
        position: absolute;
        top: 211px;
        left: -16px;
        border-radius: 34px 0 0 0;
    }
    
    .hands>.handright{
        left: 218px;
        border-radius: 0 34px 0 0;
    }
    
    .hands>.glovel,
    .hands>.glover{
        background-color: #424242;
        position: absolute;
        height: 36px;
        width: 16px;
        border-radius: 0 0 16px 16px;
        top: 308px;
        z-index: 3;
        left: -16px;
    }
    
    .hands>.glover{
        left: 217px;
    }
    
    .hands>.glovel::before,
    .hands>.glover::before{
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        top: -4px;
        left: -8px;
        border: 16px solid transparent;
        border-top-color: #424242;
    }
    
    .hands>.fingersl,
    .hands>.fingersr{
        background-color: #424242;
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        top: 312px;
        left: -8px;
        z-index: 1;
        transform: rotate(60deg);
    }
    
    .hands>.fingersr{
        left: 210px;
    }
    
    .hands>.fingersl::before,
    .hands>.fingersr::before,
    .hands>.fingersl::after,
    .hands>.fingersr::after
    {
        background-color: #2c2c2c;
        height: 16px;
        width: 16px;
        content: "";
        border-radius: 16px;
        position: absolute;
        top: 2px;
        left: 8px;
        z-index: 1;
    }
    
    .hands>.fingersl::after,
    .hands>.fingersr::after{
        background-color: #383838;
        top: 7px;
        left: 13px;
        z-index: 2;
    }
    .hands>.fingersr::before{
        left: -1px;
    }
    
    .hands>.fingersr::after{
            left: 10px;
            top: 8px;
    }
    
    /*
    *好了，亲爱的小黄人完成了！
    */`

    writeCode('',code);
    console.log(1);
}).call()