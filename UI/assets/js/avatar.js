let image = document.getElementsByClassName('meetup_image');

window.onload = function() {
    for (let i = 0; i < image.length; i++) {
        let r = Math.random() * 225,
        g = Math.random() * 225,
        b = Math.random() * 225;

        image[i].style.background = `rgb(${r}, ${g}, ${b})`;
    }
}
