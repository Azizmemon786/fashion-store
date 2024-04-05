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
  slidesPerView: 4.4,
  spaceBetween : 17,
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
        slidesPerView: 4.,
        //spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4.1
        //spaceBetween: 20,
    },
    1300: {
        slidesPerView: 4.4,
        spaceBetween: 17,
    },
    },
});
// close main slider
// ..........................
// dropdown slider
var swiper = new Swiper(".drop-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
// drop down slider end
// ..........................
// cart slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

//   cart slider end
// ..............
// inc - dec

const plus = document.querySelector(".plus"),
 minus = document.querySelector(".minus"),
 num = document.querySelector(".num");

 let a = 0;

 plus.addEventListener("click", ()=>{
    a++;
    a = (a <= 10) ? + a : a;
    num.innerText = a;
 });

 minus.addEventListener("click", ()=>{
    if(a > 0){
        a--;
        a = (a <= 10) ? + a : a;
        num.innerText = a;
    }
    else{
        a = 0;
    }
 });

 // inc - dec end
//  ............
// description section

let description = document.getElementById("description");
let review = document.getElementById("review");
let shipping = document.getElementById("shipping");
let custom = document.getElementById("custom");

const desContent = document.querySelector(".des-content"), 
 reviewContent = document.querySelector(".review-content"), 
 shippingContent = document.querySelector(".shipping-content"), 
 customContent = document.querySelector(".custom-content"); 

 description.addEventListener("click", ()=>{
    desContent.style.display = "block";
    reviewContent.style.display = "none";
    shippingContent.style.display = "none";
    customContent.style.display = "none";
 })

 review.addEventListener("click", ()=>{
    reviewContent.style.display = "block";
    desContent.style.display = "none";
    shippingContent.style.display = "none";
    customContent.style.display = "none";
 })

 shipping.addEventListener("click", ()=>{
    shippingContent.style.display = "block";
    desContent.style.display = "none";
    reviewContent.style.display = "none";
    customContent.style.display = "none";
 })

 custom.addEventListener("click", ()=>{
    customContent.style.display = "block";
    desContent.style.display = "none";
    reviewContent.style.display = "none";
    shippingContent.style.display = "none";
 })

//  active button script start

 const navLinksEls = document.querySelectorAll(".nav_link");
 
 navLinksEls.forEach(navLinksEl => {
    navLinksEl.addEventListener("click", ()=>{
        document.querySelector(".active")?.classList.remove('active');
        navLinksEl.classList.add("active");
    })
 })
 
//  active button script end
// description end

var swiper = new Swiper(".likeSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
  });