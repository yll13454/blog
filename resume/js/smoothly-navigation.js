
var litaglist = document.querySelectorAll('nav.submonitor>ul>li');
// console.log(litaglist);
for (var i = 0; i < litaglist.length; i++) {
    litaglist[i].onmouseenter = function (a) {
        a.currentTarget.classList.add('active');
    }
    litaglist[i].onmouseleave = function (a) {
        a.currentTarget.classList.remove('active');
    }
}

var aTagList = document.querySelectorAll('nav.submonitor>ul>li>a');
for (var i = 0; i < aTagList.length; i++) {
    aTagList[i].onclick = function (a) {
        a.preventDefault();
        var href = a.target.getAttribute('href');
        var element = document.querySelector(href);

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = { y: window.scrollY }; // 开始位置
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: element.offsetTop - 75 }, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0, coords.y);
            })
            .start(); // Start the tween immediately.

    }
}
