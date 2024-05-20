const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.services__pagination',
    clickable: false
  },
  on: {
    // slideChange: swiper => {
    //   newSlide(swiper.realIndex)
    // },
    slideNextTransitionStart: swiper => activeCard(swiper.realIndex + 2),
    slidePrevTransitionStart: swiper => activeCard(swiper.realIndex)

    
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
  spaceBetween: 0
});

// const swiper2 = new Swiper('.swiper-2', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.services-hidden__pagination',
//     clickable: true
//   }, 

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next-h',
//     prevEl: '.swiper-button-prev-h',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true
//   },
//   simulateTouch: true,
//   slidesPerView: 1,
//   slideToClickedSlide: false,
//   centeredSlides: false,
//   loopedSlides: 0,
//   spaceBetween: 100
// });
const prevent = ev => ev.preventDefault();

// ...
// в вашей функции закрытия окна:
const serv_pag = document.querySelector('.services__pagination');
const serv_pag_bul = serv_pag.querySelectorAll('.swiper-pagination-bullet');
// const serv_hid_f = () => {
//   serv_hid.classList.toggle('services-hidden_visible');
//   serv_pag.classList.toggle('services__pagination_hidden');
//   document.querySelectorAll('.container').forEach((cont) => {
//     cont.classList.toggle('container_blur');
//   });
// }
// const btn_serv = document.querySelectorAll('.services__button');
// const close_serv = document.querySelector('.services-close');
// const serv_hid = document.querySelector('.services-hidden');
// let serv_hid_flag = false;
// btn_serv.forEach((el) => {
//   el.addEventListener('click', () => {
//     swiper2.slideTo((el.id.slice(el.id.indexOf('-') + 1)), 0);
//     document.addEventListener('wheel', prevent, {passive: false});
//     serv_hid_f();
//     serv_hid_flag = true;
//   });
// });
// close_serv.addEventListener('click', () => {
//   document.removeEventListener('wheel', prevent);
//   serv_hid_f();
//   serv_hid_flag = false;
// });
// document.addEventListener("keydown", (e) => {
//   if (e.code == "Escape") {
//     if (serv_hid_flag){
//       serv_hid_f();
//       serv_hid_flag = false;
//     }
//   }
// });
const serv_w = document.querySelector('.services-w');
const serv_card = document.querySelectorAll('.services-card');

// hover/active effect of cards
const activeCard = (ind) => {
  if (ind >= serv_card.length){
    ind = ind - serv_card.length
  }
  serv_card.forEach((i)=>{
    i.classList.remove('services-card_f');
  });
  serv_card[ind].classList.add('services-card_f')
  serv_pag_bul.forEach((bul) => {
    bul.classList.remove('swiper-pagination-bullet_f');
    bul.classList.add('swiper-pagination-bullet_h');
  }); 
  serv_pag_bul[ind].classList.add('swiper-pagination-bullet_f');
  serv_pag_bul[ind].classList.remove('swiper-pagination-bullet_h');
}
let lastIndex = 0
// const nextSlide = (index) => {
//   console.log(index);
//   len = serv_card.length
//   l = Math.abs((index - len) - lastIndex)
//   r = Math.abs(index - lastIndex)
//   console.log(l, r)
//   if (((l < r) && (lastIndex < index)) || ((l > r) && (lastIndex < index))){
//     lastIndex = index;
//     activeCard(index)
//   } else {
//     lastIndex = index;
//     activeCard(index)
//   }

// }


serv_card.forEach((el, i)=>{
  el.addEventListener('mouseover', () => {
    activeCard(i)
  });
  //  el.addEventListener('mouseout', () => {
  //   serv_pag_bul.forEach((bul) => {
  //     bul.classList.remove('swiper-pagination-bullet_h');
  //   }); 
  //   serv_pag_bul[i].classList.remove('swiper-pagination-bullet_f');
  // });
});

// IntroButton animation
team = true;
introBtn = document.querySelector('#introButton');

const introButton = () => {
  if (team){
    team = false;
    introBtn.classList.add('intro__btn_frame');
    introBtn.classList.remove('intro__btn_team');
    introBtn.href = '/framework/';


  } else {
    team = true;
    introBtn.classList.remove('intro__btn_frame');
    introBtn.classList.add('intro__btn_team');
    introBtn.href = '/team/';

  }
}
setInterval(introButton, 5000);




