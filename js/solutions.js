const cen_h = () => {
    document.querySelector('.planetarium-center').classList.toggle('planetarium-center_hl');
  }
document.querySelector('.planetarium-center__button_top').addEventListener('mouseover', cen_h);
document.querySelector('.planetarium-center__button_top').addEventListener('mouseout', cen_h);

const gridSwiper = new Swiper('.grid-swiper', {
  direction: 'horizontal',
  loop: true,

  on: {
    slideChange: swiper => {
      incrPlanet(swiper.realIndex)
    }
  },
  // If we need pagination
  pagination: {
    el: '.grid__pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch: true,
  slidesPerView: 1,
  slideToClickedSlide: false,
  centeredSlides: false,
  loopedSlides: 0,
  spaceBetween: 290,
});

const planets = document.querySelectorAll('.planetarium__planet');
const slideTo = (n) => {
  el = document.querySelector('.grid');
  el.scrollIntoView({
    behavior: 'smooth'
  });
  gridSwiper.slideToLoop(n, 0);
}
document.querySelector('.grid__pagination').style.opacity = 1;

const incrPlanet = (n) => {
  planets.forEach((el, ind) => {
    if (ind === n){
      el.classList.add('planetarium__planet_active')
    } else {
      el.classList.remove('planetarium__planet_active')
    }
  })
}
incrPlanet(0);