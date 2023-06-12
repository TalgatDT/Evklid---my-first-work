const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  // Optional parameters/ориганьные параметры
  loop: true,

  // If we need pagination/если у вас есть пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // If we need autoplay/если у васс есть автопрокрутка
  autoplay: {
    delay: 8000,
    pauseOnMouseEnter: true,
  },
});
