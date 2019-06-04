var $bts = $('.bt>button');
var $images = $('.wrapper>img');
var $wrapper = $('.wrapper');
var current = 1
var n = 0
var m = 0
var firstCopy = $images.eq(0).clone(true);
var lastCopy = $images.eq($images.length-1).clone(true);
$wrapper.append(firstCopy);
$wrapper.prepend(lastCopy);
$wrapper.css({transform:'translateX(-600px)'})

$('.bt').on('click','button',function(e){
    var $button = $(e.currentTarget);
    var index = $button.index();
    // console.log(current)
    // console.log(index)
    if(current === 1 && index === 0){
        $wrapper.css({transform:'translateX(0)'}).one('transitionend',function(){
            $wrapper.hide().offset();
            $wrapper.css({
                transform:'translateX(-'+($images.length)*600+'px)'
            }).show()
        })
    }else if(current === 5 && index === 6){
        $wrapper.css({transform:'translateX(-'+(index)*600+'px)'}).one('transitionend',function(){
            $wrapper.hide().offset();
            $wrapper.css({
                transform:'translateX(-600px)'
            }).show()
        })
    }else if( index === 0){
        console.log('current:'+current)
        if(current>0){
            // console.log('1')
            n = current
            $wrapper.css({
                transform:'translateX(-'+(n-1)*600+'px)'
            })
            n=n-1
        }else if(n>1){
            $wrapper.css({
                transform:'translateX(-'+(n-1)*600+'px)'
            })
            n=n-1
        }else{
            $wrapper.css({transform:'translateX(-'+(index)*600+'px)'}).one('transitionend',function(){
                $wrapper.hide().offset();
                $wrapper.css({
                    transform:'translateX(-3000px)'
                }).show()
            })
            n = 5
        }
        console.log('n:'+n)
    }else if(index === 6){
        console.log('current:'+current)
        if(current<6 ){
            m = current
            $wrapper.css({
                transform:'translateX(-'+(m+1)*600+'px)'
            })
            m=m+1
        }else if(m<5){
            $wrapper.css({
                transform:'translateX(-'+(m+1)*600+'px)'
            })
            m=m+1
        }else{
            console.log('3')
            $wrapper.css({transform:'translateX(-3600px)'}).one('transitionend',function(){
                $wrapper.hide().offset();
                $wrapper.css({
                    transform:'translateX(-600px)'
                }).show()
            })
            m=1
        }
        console.log('m:'+m)
    }else{
        $wrapper.css({
            transform:'translateX(-'+(index)*600+'px)'
        })
    }
    current = index
})