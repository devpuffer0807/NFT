const eye = document.querySelector('.eye');
const head = document.querySelector('.head');
const left_leg = document.querySelector('.left-leg');
const right_leg = document.querySelector('.right-leg');
const tail = document.querySelector('.tail');

window.addEventListener('mousemove', function (evt) {
    const x = -(window.innerWidth / 2 - evt.pageX) / 12;
    const y = -(window.innerHeight / 2 - evt.pageY) / 10;
    eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
});

var iter = true;

document.querySelector('.tail').addEventListener("click", function (evt) {
    tail.style.animation = "tail-move 0.6s 1";
    setTimeout(function () {
        tail.style.animation = "";
    }, 700);
});

var three_click = 0;

const cat_svg = document.querySelector('.cat-svg')
const shadow = document.querySelector('.shadow')
document.querySelector('.Cat').addEventListener("click", function (evt) {
    three_click++;
    if (three_click == 3) {
        three_click = 0;
        cat_svg.style.animation = "cat-jump 0.6s 1";
        shadow.style.animation = "shadow-jump 0.6s 1"
        setTimeout(function () {
            cat_svg.style.animation = "";
            shadow.style.animation = ""
        }, 700);
    }
    else {
        setTimeout(function () {
            three_click = 0;
        }, 600);
    }
});


document.querySelector('.left-leg').addEventListener("click", function (evt) {
    left_leg.style.animation = "leg-left-scratch 2s 1";
    setTimeout(function () {
        left_leg.style.animation = "";
    }, 2100);
});

document.querySelector('.right-leg').addEventListener("click", function (evt) {
    right_leg.style.animation = "leg-right-scratch 2s 1";
    setTimeout(function () {
        right_leg.style.animation = "";
    }, 2100);
});

window.addEventListener('mousemove', function (evt) {
    const x = -(window.innerWidth / 2 - evt.pageX) / 30;
    const y = -(window.innerHeight / 2 - evt.pageY) / 26;
    head.style.transform = `translateY(${y}px) translateX(${x}px)`;
});
