"use strict";

///////////////////
// Slider

const slides = document.querySelectorAll(".slider__item");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let currentSlide = 0;
const numberOfSlides = slides.length - 1; // -1 é para ficar na base 0

const goToSlide = function(slide) {
    slides.forEach(function(s, i) {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}
goToSlide(0);

// próximo
const nextSlide = function() {
    if (currentSlide === numberOfSlides) currentSlide = 0;
    else currentSlide++;
    goToSlide(currentSlide);
};

// anterior
const prevSlide = function() {
    if (currentSlide === 0) currentSlide = numberOfSlides;
    else currentSlide--;
    goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);