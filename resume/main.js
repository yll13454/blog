var portfolio1 = document.getElementById('portfolio1');
var portfolio2 = document.getElementById('portfolio2');
var portfolio3 = document.getElementById('portfolio3');
var bariInner = document.getElementById('bariInner');
var topNav = document.getElementById('topNav');

portfolio1.onclick = function () {
    bariInner.className = 'progress';
}
portfolio2.onclick = function () {
    bariInner.className = 'progress1';
}
portfolio3.onclick = function () {
    bariInner.className = 'progress2';
}

findClosest() 

window.onscroll = function () {
    if (window.scrollY > 0) {
        topNav.classList.add('whitec');
    } else {
        topNav.classList.remove('whitec');
    }
    findClosest();
}

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

function findClosest() {
    var specialTags = document.querySelectorAll('[date-x]');
    // console.log(specialTags);
    var minIndex = 0;
    // console.log(specialTags.length);
    for (var i = 0; i < specialTags.length; i++) {
        // console.log(i+':');
        // console.log(specialTags[i].scrollY);
        // console.log(window.scrollY);
        // console.log(minIndex);
        // console.log(specialTags[minIndex].scrollY);
        if (Math.abs(specialTags[i].offsetTop - window.scrollY)< Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    var id = specialTags[minIndex].id;
    specialTags[minIndex].classList.remove('offset');
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentElement;
    var borathor = li.parentElement.children;
    for(var i = 0; i < borathor.length; i++){
        borathor[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}