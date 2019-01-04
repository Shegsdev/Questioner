var nav = document.querySelector('#nav');

window.onscroll = function() {
    var scrollHeight = window.screenTop;

    if (scrollHeight > 20) {
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.width = 100 + "%";
    }
}
