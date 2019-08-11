!function () {
    var view = document.querySelector(".portfolio");
    var controller = {
        view: null,
        mySwiper: null,
        swiperOptions: {
            direction: 'horizontal', loop: true, autoplay: true, pagination: { el: '.swiper-pagination', }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }
        },
        init: function (view) {
            this.view = view;
            this.initswiper();
        },
        initswiper: function () {
            this.mySwiper = new Swiper('.swiper-container',
                this.swiperOptions)
        }
    }
    controller.init(view);
}.call()