
function openMenu() {
  let full = document.getElementById("full");
  let header = document.getElementById("header");
  full.classList.toggle("hidden")
  header.classList.toggle("active")
}



$(function () {
    'use strict';

    
        
    const instagram = new Swiper('.instagram__slider', {
        slidesPerView: 5,
        spaceBetween: 9,
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },breakpoints: {
          1380: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 4,
            // spaceBetween: 30,
            // centeredSlides: false,
          },
          991: {
            slidesPerView: 3,
            // spaceBetween: 100,
          },
          767: {
            // slidesPerView: 2,
            slidesPerView: 'auto',
            // slidesPerView: 'auto',
            // centeredSlides: true,
          },
          576: {
            slidesPerView: 'auto',
            // centeredSlides: false,
          },
          320: {
            slidesPerView: 'auto',
            // centeredSlides: true,
            // spaceBetween: 14,
          }
        }
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

        


  new Swiper('.big-slider', {
    loop: true,
    speed: 1000,
    effect: 'fade',
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });
  
  new Swiper('.showroom-gallery__slider', {
      watchOverflow: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      breakpoints: {
        991: {
          spaceBetween: 0,
          slidesPerView: 3,
        },
        576: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        }
    }
  });
  
  new Swiper('.reviews-video__slider', {
    slidesPerView: 4,
    spaceBetween: 14,
    watchOverflow: true,
    slidesPerView: 'auto', /* для слайда в CSS указать width: auto; */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  new Swiper('.client-swiper', {
    slidesPerView: 5,
    spaceBetween: 14,
    watchOverflow: true,
    loop: true,
    slidesPerView: 'auto', /* для слайда в CSS указать width: auto; */
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