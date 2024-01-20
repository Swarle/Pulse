
const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.slider_prev').addEventListener('click', function() {
    slider.goTo('prev')
  });

  document.querySelector('.slider_next').addEventListener('click', function() {
    slider.goTo('next')
  });