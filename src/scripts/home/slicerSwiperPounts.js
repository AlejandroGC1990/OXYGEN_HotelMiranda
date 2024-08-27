document.addEventListener("DOMContentLoaded", function () {
  const swiperPagination = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});