const swiperPaginationMenu = new Swiper(".swiperMenu2", {
  // direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // bulletClass: "swiper-pagination-bullet",  
    // bulletActiveClass: "swiper-pagination-bullet-active", 
  },
  autoplay: {
    delay: 5000,
  },
});
