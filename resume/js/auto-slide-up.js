findClosest()
window.addEventListener('scroll', function () {
    findClosest();
})

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
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    var id = specialTags[minIndex].id;
    specialTags[minIndex].classList.remove('offset');
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentElement;
    var borathor = li.parentElement.children;
    for (var i = 0; i < borathor.length; i++) {
        borathor[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}