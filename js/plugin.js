// Company Slider Active
var swiper = new Swiper(".company-slider", {
    disableOnInteraction: false,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 5000,
    grabCursor: true,
    autoplay: {
        delay: 1,
    },
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
});