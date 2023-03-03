

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.8,
        },
        576: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3.4,
        },
        992: {
            slidesPerView: 4.8,
        },
        1300: {
            slidesPerView: 5.5,
        },
    }
  });