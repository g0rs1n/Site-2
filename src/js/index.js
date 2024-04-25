import mobileNav from './modules/mobile-nav.js';
mobileNav();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 80,
    navigation: {
        nextEl: '#arrowNext',
        prevEl: '#arrowPrev',
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

        400: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        550: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

        800: {
            slidesPerView: 4,
            spaceBetween: 60,
        },

        1000: {
            slidesPerView: 5,
            spaceBetween: 80,
        }
    },
});