let menuBtn = document.querySelector('.header__menu-btn');
let menuRightSide = document.querySelector('.header__menu');
let closeBtn = document.querySelector('.close');

menuBtn.onclick = () => {
    menuRightSide.classList.add('open');
}

closeBtn.onclick = () => {
    menuRightSide.classList.remove('open');
}


let beachImgs = document.querySelectorAll('.beach__image img');
let beachSliders = document.querySelectorAll('.beach__slider-item');

let i = 0;

setInterval(() => {
    let beachImgActive = document.querySelector('.beach__image img.active');
    let beachSliderActive = document.querySelector('.beach__slider-item.active');

    beachImgActive.classList.remove('active');
    beachSliderActive.classList.remove('active');

    beachImgs[i].classList.add('active');
    beachSliders[i].classList.add('active');

    ++i;

    if (i >= beachImgs.length) {
        i = 0;
    }
}, 5000)


beachSliders.forEach((beachSlider) => {
    beachSlider.onclick = () => {
        let beachImgActive = document.querySelector('.beach__image img.active');
        let beachSliderActive = document.querySelector('.beach__slider-item.active');

        i = beachSlider.getAttribute('data-set')

        beachImgActive.classList.remove('active');
        beachSliderActive.classList.remove('active');

        beachImgs[i].classList.add('active');
        beachSliders[i].classList.add('active');

    }
})