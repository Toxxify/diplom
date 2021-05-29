
function openMenu() {
  let body = document.getElementsByTagName("body")[0];
  let full = document.getElementById("full");
  let header = document.getElementById("header");
  full.classList.toggle("hidden");
  header.classList.toggle("active");
  body.classList.toggle("scroll-hidden");
}



$(function () {
  'use strict';

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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  new Swiper('.instagram__slider', {
    slidesPerView: 5,
    spaceBetween: 9,
    loop: true,
    speed: 1000,
    slidesPerView: 'auto', /* для слайда в CSS указать width: auto; */
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let productMain = new Swiper('.product__slider-main', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto', /* для слайда в CSS указать width: auto; */
  });

  new Swiper('.product__slider-additional', {
    slidesPerView: 1,
    speed: 0,
    autoHeight: true,
    simulateTouch: false, /*не даёт листать этот слайдер */
    thumbs: {
      swiper: productMain
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      767: {
        simulateTouch: true,
      },
      320: {
        simulateTouch: true,
      },
    }
  });

  new Swiper('.offer-slider', {
    slidesPerView: 4,
    spaceBetween: 12,
    loop: true,
    speed: 1000,
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


  /* POPUP */
  let popupCart = document.getElementById('cart');
  let popupCartWrapper = document.getElementById('cartWrapper');
  let popupCartBtn = document.getElementById('cartBtn');
  let popupCartClose = document.querySelector('.close');

  popupCartBtn.onclick = function() {
    popupCart.style.visibility = "visible";
    popupCart.style.opacity = "1";
    popupCartWrapper.style.opacity = "1";
    popupCartWrapper.style.transform = "translate(0, 0%)";
  }
  popupCartClose.onclick = function() {
    popupCart.style.visibility = "hidden";
    popupCart.style.opacity = "0";
    popupCartWrapper.style.opacity = "0";
    popupCartWrapper.style.transform = "translate(0, -100%)";
  }
  window.onclick = function (e) {
    if(e.target == popupCart) {
      popupCart.style.visibility = "hidden";
      popupCart.style.opacity = "0";
      popupCartWrapper.style.opacity = "0";
      popupCartWrapper.style.transform = "translate(0, -100%)";
    }
  }


  
  let popupPreOrder = document.getElementById('preOrder');
  let popupPreOrderWrapper = document.getElementById('preOrderWrapper');
  let popupPreOrderBtn = document.getElementById('preOrderBtn');
  let popupPreOrderClose = document.querySelector('.preOrderClose');

  popupPreOrderBtn.onclick = function() {
    popupPreOrder.style.visibility = "visible";
    popupPreOrder.style.opacity = "1";
    popupPreOrderWrapper.style.opacity = "1";
    popupPreOrderWrapper.style.transform = "translate(0, 0%)";
  }
  popupPreOrderClose.onclick = function() {
    popupPreOrder.style.visibility = "hidden";
    popupPreOrder.style.opacity = "0";
    popupPreOrderWrapper.style.opacity = "0";
    popupPreOrderWrapper.style.transform = "translate(0, -100%)";
  }
  window.onclick = function (e) {
    if(e.target == popupPreOrder) {
      popupPreOrder.style.visibility = "hidden";
      popupPreOrder.style.opacity = "0";
      popupPreOrderWrapper.style.opacity = "0";
      popupPreOrderWrapper.style.transform = "translate(0, -100%)";
    }
  }
});



// let reg = /[0-9]/;

// let inp = document.querySelector('#form-name')

// document.querySelector('.showroom-form__btn').onclick = function(e){
//   e.preventDefault();
//   if (!reg.test(inp.value)) {
//     console.log('Неверно')
//   } else {
//     console.log('Верно')
//   }
// }



// const x_form = document.querySelector('#form-showroom');
// const x_email = document.querySelector('#form-phone');
// const x_name = document.querySelector('#form-name');
// x_form.addEventListener('submit', function(evt) {
//   evt.preventDefault();
//   if(!x_name.value) {
//     alert('Поле имя не заполнено');
//     return;
//   }
  
//   if(!email.value) {
//     alert('Поле email не заполнено');
//     return;
//   }
  
//   this.submit();
// });