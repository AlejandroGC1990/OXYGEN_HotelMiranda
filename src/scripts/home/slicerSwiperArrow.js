document.addEventListener("DOMContentLoaded", function () {
  const swiperArrow = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
