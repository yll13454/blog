var $bts = $('.bt>button');
var $images = $('.wrapper>img');
var $wrapper = $('.wrapper');
var current = 1
var firstCopy = $images.eq(0).clone(true);
var lastCopy = $images.eq($images.length - 1).clone(true);
$wrapper.append(firstCopy);
$wrapper.prepend(lastCopy);
$wrapper.css({ transform: 'translateX(-600px)' })

var setTime = setInterval(() => {
    goToSlide(current + 1)
}, 2000);

$('.box').on('mouseenter',function(){
    window.clearInterval(setTime)
})

$('.box').on('mouseleave',function(){
    setTime = setInterval(() => {
        goToSlide(current + 1)
    }, 2000);
})

$bts.eq(0).on('click', function (params) {
    goToSlide(current - 1)
})

$bts.eq(6).on('click', function (params) {
    goToSlide(current + 1)
})

$('.bt').on('click', 'button', function (e) {
    var $button = $(e.currentTarget);
    var index = $button.index();
    console.log('current:', current)
    console.log('index:', index)
    if(index>0&&index<6){goToSlide(index)}
})

function goToSlide(index) {
    if (index > 6) {
        console.log('4')
        index = 2
    } else if (index < 0) {
        index = 4
    }
    if (current === 1 && index === 0) {
        $wrapper.css({ transform: 'translateX(0)' }).one('transitionend', function () {
            $wrapper.hide().offset();
            $wrapper.css({
                transform: 'translateX(-' + ($images.length) * 600 + 'px)'
            }).show()
        })
        current = index
    } else if (current === 5 && index === 6) {
        $wrapper.css({ transform: 'translateX(-' + (index) * 600 + 'px)' }).one('transitionend', function () {
            $wrapper.hide().offset();
            $wrapper.css({
                transform: 'translateX(-600px)'
            }).show()
        })
        current = index
    } else{
        $wrapper.css({
            transform: 'translateX(-' + (index) * 600 + 'px)'
        })
        current = index
    }
}
