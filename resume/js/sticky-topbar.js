!function () {
    var view = document.getElementById('topNav');
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function () {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.active();
                } else {
                    this.deactive();
                }
            })
        },
        active: function () {
            this.view.classList.add('whitec');
        },
        deactive: function () {
            this.view.classList.remove('whitec');
        }
    }
    controller.init(view);
}.call()
