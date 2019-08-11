!function () {
    var view = document.querySelectorAll('[date-x]');
    var contorller =  {
        view: null,
        init: function(view){
            this.view = view; 
            this.findClosest(view);
            window.addEventListener('scroll', () => {
                this.findClosest(view);
            })
        },
        findClosest: function(view) {
            var minIndex = 0;
            for (var i = 0; i < view.length; i++) {
                if (Math.abs(view[i].offsetTop - window.scrollY) < Math.abs(view[minIndex].offsetTop - window.scrollY)) {
                    minIndex = i;
                }
            }
            var id = view[minIndex].id;
            view[minIndex].classList.remove('offset');
            var a = document.querySelector('a[href="#' + id + '"]');
            var li = a.parentElement;
            var borathor = li.parentElement.children;
            for (var i = 0; i < borathor.length; i++) {
                borathor[i].classList.remove('highlight');
            }
            li.classList.add('highlight');
        }
    }
    contorller.init(view);
}.call()

