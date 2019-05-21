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

window.onscroll = function () {
    // console.log(window.screenY);
    if (window.scrollY > 0) {
        topNav.classList.add('whitec');
    } else {
        topNav.classList.remove('whitec');
    }
}

var litaglist = document.querySelectorAll('nav.submonitor>ul>li');
// console.log(litaglist);
for (var i = 0; i < litaglist.length; i++) {
    litaglist[i].onmouseenter = function (a) {
        a.currentTarget.classList.add('active');
    }
    litaglist[i].onmouseleave = function(a){
        a.currentTarget.classList.remove('active');
    }
}

var aTagList = document.querySelectorAll('nav.submonitor>ul>li>a');
for (var i = 0; i < aTagList.length; i++){
    aTagList[i].onclick = function(a){
        // console.log(a.target.getAttribute('href'));
        a.preventDefault();
        var href = a.target.getAttribute('href');
        var element = document.querySelector(href);
        // console.log(element.offsetTop);
        window.scrollTo(0,element.offsetTop-75);

        
    }
}