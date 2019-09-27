import "normalize.css";
import "../scss/main.scss";
import "../index.html";
import Glide from "@glidejs/glide";

function createSlider(el) {
    return new Glide(el, {
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        swipeThreshold: false,
        dragThreshold: false
    })
}

createSlider(".actions__slider-wrapper").mount();
createSlider(".header__slider-wrapper").mount();
