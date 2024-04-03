 /// Start Swiper Logo ///
 var swiper = new Swiper(".card-slider", {
    //slidesPerView: 3,
    //spaceBetween: 10,
    loop: true,
    autoplay: {
    delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
    320: {
        slidesPerView: 1,
        //spaceBetween: 20,
    },
    425: {
        slidesPerView: 3,
        //spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        //spaceBetween: 40,
    },
    1024: {
        slidesPerView: 5,
        //spaceBetween: 50,
    },
    1300: {
        slidesPerView: 6,
        spaceBetween: 140,
    },
    },
});
/// Close Swiper Logo ///



// main slider 
var swiper = new Swiper(".slider-grids", {
  slidesPerView: 4,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
        slidesPerView: 1,
        //spaceBetween: 20,
    },
    425: {
        slidesPerView: 3,
        //spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        //spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4
        //spaceBetween: 20,
    },
    1300: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    },
});
// close main slider


var swiper = new Swiper(".drop-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
