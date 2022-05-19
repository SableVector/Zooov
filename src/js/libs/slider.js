
// Подключение дополнительных модулей Swiper поизводиться в {} через запятую.
// Пример: { Navigation, Pagination }.
// Модули: Autoplay, Lazy, Manipulation, Navigation, Pagination, Parallax, Thumbs
import Swiper, { Navigation, Autoplay, Thumbs } from 'swiper';

const slider = () => {

    // Добавить классы слайдерам
    // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
    const bildSliders = () => {
        let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
        if (sliders) {
            sliders.forEach(slider => {
                slider.parentElement.classList.add('swiper');
                slider.classList.add('swiper-wrapper');
                for (const slide of slider.children) {
                    slide.classList.add('swiper-slide');
                }
            });
        }
    };

    // Инициализация слайдера
    const initSliders = () => {
        // Добавления классов слайдера
        // при необходимости отключить4
        bildSliders();

        // Перечень слайдеров
        if (document.querySelector('.slider-about')) {
            new Swiper('.slider-about', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 10,
                parallax: true,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                // pagination: {
                //     el: '.slider-about__slider-pagination',
                //     clickable: true,
                // },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                // Breakpointers; {
                /* 
                    320: {
                        slidesPerView:1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView:3,
                        spaceBetween:20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                 */
                on: {
                }
            });
        }

        if (document.querySelector('.image-slider')) {
            const thumbsSwiper = new Swiper('.thrumbs-image', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Autoplay, Thumbs],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
                slidesPerView: 4,
                spaceBetween: 16,
                // parallax: true,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                // pagination: {
                //     el: '.slider-about__slider-pagination',
                //     clickable: true,
                // },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                },
                on: {
                }
            });

            new Swiper('.image-slider', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Autoplay, Thumbs],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                thumbs: {
                    swiper: thumbsSwiper
                },
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 10,
                // parallax: true,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                // pagination: {
                //     el: '.slider-about__slider-pagination',
                //     clickable: true,
                // },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                // Breakpointers; {
                /* 
                    320: {
                        slidesPerView:1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView:3,
                        spaceBetween:20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                 */
                on: {
                }
            });
        }

        // if (document.querySelector('.ration-popup__sliders')) {
        //     const thumbsSwiper = new Swiper('.thumbs-images', {
        //         // Подключаем модули слайдера
        //         // для конкретного случая
        //         modules: [Navigation, Pagination, Autoplay, Thumbs],
        //         /* 
        //         effect: 'fade',
        //         */
        //         observer: true,
        //         observeParents: true,
        //         slidesPerView: 4,
        //         spaceBetween: 16,
        //         // autoHeight: true,
        //         speed: 800,
        //         // touchRatio: 0,
        //         // simulateTouch: false,
        //         // loop: true,
        //         // preloadImages:false,
        //         // lazy: true,

        //         // Dotts
        //         pagination: {
        //             el: '.products-new__dotts',
        //             clickable: true,
        //             dynamicBullets: true,
        //         },

        //         // Arrows
        //         // navigation: {
        //         //     nextEl: '.about__more .more__item_next',
        //         //     prevEl: '.about__more .more__item_prev'
        //         // },

        //         // Scrollbar
        //         // scrollbar: {
        //         //     el: '.swiper-scrollbar',
        //         //   },

        //         // breakpoints: {
        //         //     992: {
        //         //         slidesPerView: 3,
        //         //     },
        //         //     1330: {
        //         //         slidesPerView: 4,
        //         //         spaceBetween: 16,
        //         //     },
        //         // },
        //         on: {
        //         }
        //     });
        //     new Swiper('.sliders-popup__slider', {
        //         // Подключаем модули слайдера
        //         // для конкретного случая
        //         modules: [Navigation, Pagination, Autoplay, Thumbs],
        //         /* 
        //         effect: 'fade',
        //         */
        //         autoplay: {
        //             dealay: 3000,
        //             disableOnInteraction: false,
        //         },
        //         thumbs: {
        //             swiper: thumbsSwiper
        //         },
        //         observer: true,
        //         observeParents: true,
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //         // autoHeight: true,
        //         speed: 800,
        //         // touchRatio: 0,
        //         // simulateTouch: false,
        //         // loop: true,
        //         // preloadImages:false,
        //         // lazy: true,

        //         // Arrows
        //         // navigation: {
        //         //     nextEl: '.about__more .more__item_next',
        //         //     prevEl: '.about__more .more__item_prev'
        //         // },

        //         // Scrollbar
        //         // scrollbar: {
        //         //     el: '.swiper-scrollbar',
        //         //   },
        //         on: {
        //         }
        //     });

        // }
    };


    window.addEventListener("load", function (e) {
        // Запуск инициализации слайдера
        initSliders();
    });



};

export default slider;