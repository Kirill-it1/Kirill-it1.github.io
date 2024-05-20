//planets slider
const gridSwiper = new Swiper('.grid-swiper', {
  direction: 'horizontal',
  loop: false,

  on: {
    slideChange: swiper => {
      incrPlanet(swiper.realIndex)
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.grid__pagination',
  //   clickable: true
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  simulateTouch: false,
  slidesPerView: 1,
  slideToClickedSlide: false,
  centeredSlides: false,
  loopedSlides: 0,
  spaceBetween: 200,
});
// auto changing planets
number = 0
const changePlanets = () => {
  if (number >= planets.length){
    number -= planets.length
  }
  gridSwiper.slideToLoop(number, 0);
  number++
}
const ip = setInterval(changePlanets, 3500)

const planets = document.querySelectorAll('.planetarium__planet');
const planetHover = (n) => {
  slideTo(n)
  clearInterval(ip)
}
const slideTo = (i) => {
  // el = document.querySelector('.grid');
  // el.scrollIntoView({
  //   behavior: 'smooth'
  // });
  gridSwiper.slideToLoop(i, 0);
}
//planets
const incrPlanet = (n) => {
  planets.forEach((el, ind) => {
    toSlide = parseInt(el.getAttribute('onmouseover').match(/\d+/)[0])
    if (toSlide === n){
      el.classList.add('planetarium__planet_active')
    } else {
      el.classList.remove('planetarium__planet_active')
    }
  })
}
incrPlanet(0);

