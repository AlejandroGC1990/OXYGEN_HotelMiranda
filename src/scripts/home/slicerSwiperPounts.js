const swiperPagination = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",  
    bulletActiveClass: "swiper-pagination-bullet-active", 
  },
  autoplay: {
    delay: 5000,
  },
});
