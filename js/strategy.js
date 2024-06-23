//planets slider
const width = window.innerWidth;

let planets = ''
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
  allowTouchMove: false,
  simulateTouch: false,
  slidesPerView: 1,
  slideToClickedSlide: false,
  centeredSlides: false,
  loopedSlides: 0,
  spaceBetween: 290,
});
// auto changing planets
number = 0

let ip = '';

if (width > 1024) {
  const changePlanets = () => {
    if (number >= planets.length){
      number -= planets.length
    }
    gridSwiper.slideToLoop(number, 0);
    number++
  }
  ip = setInterval(changePlanets, 5500);
  
  planets = document.querySelectorAll('.planetarium__planet');

}


//planets

  const incrPlanet = (n) => {
    if (width > 1024){
      planets.forEach((el, ind) => {
        toSlide = parseInt(el.getAttribute('onmouseover').match(/\d+/)[0])
        if (toSlide === n){
          el.classList.add('planetarium__planet_active')
        } else {
          el.classList.remove('planetarium__planet_active')
        }
      })
    }
  }
  incrPlanet(0);
  const gridCards = document.querySelectorAll('.grid-card');
  gridCards.forEach((card) => {
    card.addEventListener('click', () => {
      const width = window.innerWidth;
      if (width <= 1024) {
        
        let u = card.classList.toggle('grid-card_active')
        lheight = card.offsetHeight + card.querySelector('.grid-card__text').offsetHeight + 15;
        card.style.maxHeight = u ? `${lheight}px` : ``;
      }
    });
  });


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

window.addEventListener('resize', () => {slideTo(0)})

