import VSwiper from "./assets/VSwiper";
import GallerySlider from './custom_modules/Galery';
import closest from "./assets/Closest";
import VacancyBtn from "./assets/VacancyBtn";


    //FIRST SCREEN SLIDER
function initCompanySlider() {
    swiper.init(".tmpl-hh__present-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // effect: "fade",
        navigation: {
            prevEl: '.tmpl-hh__present-nav-prev',
            nextEl: '.tmpl-hh__present-nav-next'
        },
        pagination: {
            el: '.tmpl-hh__present-slider-pagination',
            clickable: true,
            type: 'bullets'
        },
        breakpoints: {
            529: {
                autoHeight: true
            }
        }
    });
}
function initFirstScreenSlider() {
    swiper.init(".tmpl-hh__s-first-screen-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // effect: "fade",
        navigation: {
            prevEl: '.tmpl-hh__s-first-screen-nav-prev',
            nextEl: '.tmpl-hh__s-first-screen-nav-next'
        },
        pagination: {
            el: '.tmpl-hh__s-first-screen-slider-pagination',
            clickable: true,
            type: 'bullets'
        },
        breakpoints: {
            529: {
                autoHeight: true
            }
        }
    });
}
function initOptionsSlider() {
    swiper.init(".tmpl-hh__options-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // effect: "fade",
        navigation: {
            prevEl: '.tmpl-hh__options-nav-prev',
            nextEl: '.tmpl-hh__options-nav-next'
        },
        pagination: {
            el: '.tmpl-hh__options-slider-pagination',
            clickable: true,
            type: 'bullets'
        },
        breakpoints: {
            529: {
                autoHeight: true
            }
        }
    });
}
let swiper = new VSwiper("tmpl-hh__"),
gallerySlider = new GallerySlider(swiper,closest),
vacancyBtn = new VacancyBtn();

vacancyBtn.init();
initCompanySlider();
initFirstScreenSlider();
initOptionsSlider();
gallerySlider.init();
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

document.addEventListener('mousedown', function (event) {
    if(!event.target){
        return false;
    }
    gallerySlider.onOutClick(event.target);
});
