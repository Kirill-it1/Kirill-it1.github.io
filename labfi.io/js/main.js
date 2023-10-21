const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-nxt',
    prevEl: '.swiper-button-prv',
  },
  simulateTouch: true,
  slidesPerView: 3,
  slideToClickedSlide: false,
  centeredSlides: false,
  loopedSlides: 2,
  spaceBetween: 1
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // If we need pagination
  /*pagination: {
    el: '.swiper-pagination',
    clickable: true
  }, */

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-h',
    prevEl: '.swiper-button-prev-h',
  },
  simulateTouch: true,
  slidesPerView: 1,
  slideToClickedSlide: false,
  centeredSlides: false,
  loopedSlides: 2,
  spaceBetween: 100
});
const prevent = ev => ev.preventDefault();

// ...
// в вашей функции закрытия окна:

serv_hid_f = () => {
  serv_hid.classList.toggle('services-hidden_visible');
  document.querySelectorAll('.container').forEach((cont) => {
    cont.classList.toggle('container_blur');
  });
}
const btn_serv = document.querySelectorAll('.services__button');
const close_serv = document.querySelector('.services-close');
const serv_hid = document.querySelector('.services-hidden');
btn_serv.forEach((el) => {
  el.addEventListener('click', () => {
    swiper2.slideTo((el.id.slice(el.id.indexOf('-') + 1)), 0);
    document.addEventListener('wheel', prevent, {passive: false});
    serv_hid_f();
  });
});
close_serv.addEventListener('click', () => {
  document.removeEventListener('wheel', prevent);
  serv_hid_f()
});

const serv_card = document.querySelectorAll('.services-card');
serv_card.forEach((el)=>{
    el.addEventListener('mouseover', () => {
    serv_card.forEach((i)=>{
      i.classList.remove('services-card_f');
    });
  });
});