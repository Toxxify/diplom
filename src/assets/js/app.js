
function openMenu() {
  var full = document.getElementById("full");
  var header = document.getElementById("header");
  full.classList.toggle("hidden")
  header.classList.toggle("active")
}



$(function () {
    'use strict';
    // Application.init();

    const big = new Swiper('.big-slider', {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
    
    const showroom = new Swiper('.showroom__slider', {
        slidesPerView: 3,
        watchOverflow: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
          991: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
          },
          320: {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
          }
      }
    });
    
    const reviews = new Swiper('.reviews__slider', {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
          1380: {
            slidesPerView: 5,
            spaceBetween: 14,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          767: {
            slidesPerView: 2,
            // spaceBetween: 200,
            spaceBetween: 20,
          },
          576: {
            // spaceBetween: 80,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
          }
        }
    });
    
    const instagram = new Swiper('.instagram__slider', {
        slidesPerView: 5,
        spaceBetween: 9,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });



    var productMain = new Swiper('.product__slider-main', {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var productAdditional = new Swiper('.product__slider-additional', {
        slidesPerView: 1,
        spaceBetween: 1,
        speed: 0,
        thumbs: {
            swiper: productMain
        }
    });

    
      var offer = new Swiper('.offer-slider', {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});
















// WINDOW WIDTH DETECT
// let currentWidth = $(window).width();
// $(window).on('resize', function () {
//     currentWidth = $(window).width();
// });

// //App
// const Application = {
//     init: function() {
//         this.events();
//     },
//     events: function() {
//         !window.reinit && (window.reinit = {});

//         //main events
//         this.eventList.lazyImgs();
//         this.eventList.svgPolifill();
//         this.eventList.mask();

//         //app events
//         //this.eventList.sliders();
//     },
//     eventList: {
//         lazyImgs: function(){

//             let callback_loaded = function(el) {
//                 const $img = $(el),
//                       $img_wrap = $img.closest('.lazy-img-wrap');
//                 $img_wrap.addClass('loaded');
//             };

//             new LazyLoad({
//                 elements_selector: ".lazy-img",
//                 threshold: 0,
//                 callback_loaded: callback_loaded,
//             });
//         },
//         svgPolifill: function () {
//             // svg sprites
//             svg4everybody && svg4everybody();
//         },
//         mask: function() {
//             $("[type=tel]").inputmask({
//                 mask: '+7 (999) 99-99-99',
//                 "clearIncomplete": false,
//                 "showMaskOnHover": false,
//                 "showMaskOnFocus": true,
//                 "clearMaskOnLostFocus": true
//             });
//         },

//         sliders: function(){
//             $('.js-swiper-banner').each(function(i){
//                 let bannerSwiper = new Swiper($('.js-swiper-banner .swiper-container')[i], {
//                     // Disable preloading of all images
//                     //preloadImages: false,
//                     // Enable lazy loading
//                     //lazy: {
//                     //    loadPrevNext: true,
//                     //},
//                     autoplay: {
//                         delay: 5000,
//                     },
//                     loop: true,
//                     spaceBetween: 15,

//                     // Navigation arrows
//                     navigation: {
//                         nextEl: $('.js-swiper-banner .swiper-button-next')[i],
//                         prevEl: $('.js-swiper-banner .swiper-button-prev')[i],
//                     },
//                 });
//             });
            
//         },
//     }
// };