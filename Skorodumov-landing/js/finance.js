let qwe = 0;
function slider_init(q) {
  let slid = document.querySelector('#publications-slider');
  if(q == 0) {
    slider = slid.querySelector('.publications__finance');
  } else {
    slider = slid.querySelector('.publications__physics');
  }
  let sliderList = slider,
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slider__item'),
  arrows = slid.querySelector('.slider__button'),
  prev = slid.querySelector('.slider__button_prev'),
  next = slid.querySelector('.slider__button_next'),
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  slideWidth = 0,
  th = 3;
 

  function itemWidth() {
   if(Math.floor(sliderList.offsetWidth / slides[0].offsetWidth) >= slides.length){
      next.classList.add('slider__button_disabled');
   }
   else{
      next.classList.remove('slider__button_disabled');
    }
    slides.forEach((slide)=>{
      slideWidth = (sliderTrack.offsetWidth - ((th - 1) * 40)) / th;
      slide.style.width = `${slideWidth}px`;
    });
  }
  itemWidth();
  let lastTrf = --slides.length * slideWidth,
    posThreshold = slides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    swipeStartTime,
    swipeEndTime,
    margin = 40;
    console.log(slideWidth);
  function slide() {
    if(q != qwe) {
      return;
    }

    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    if(slides.length - Math.floor(sliderList.offsetWidth / slideWidth) >= slideIndex){
      
       slides.forEach((elem) =>{
      elem.classList.remove('slide_active');
    });


    slides[slideIndex].classList.add('slider__item_active');
    sliderTrack.style.transform = `translate3d(-${slideIndex * (slideWidth + margin)}px, 0px, 0px)`;

    
    
    }
    else{
      slideIndex --;
      if(slideIndex < 0) slideIndex = 0;
    }
    prev.classList.toggle('slider__button_disabled', slideIndex === 0);
    next.classList.toggle('slider__button_disabled', slideIndex === slides.length - th);
   
   
  }

  next.addEventListener('click', () => {
  console.log('next');
  if(!next.classList.contains('slider__button_disabled')){
    slideIndex++;
    slide();
  }
  });
  prev.addEventListener('click', () => {
    if(!prev.classList.contains('slider__button_disabled')){
      slideIndex--;
      slide();
    } 
  });
  slide();
} 



for(i = 0; i < 2; i++){

  if(i == 0){
    let slider = document.querySelector('#slider-finance'),
      sliderList = slider.querySelector('.slider-wrapper'),
      sliderTrack = slider.querySelector('.slider-track'),
      slides = slider.querySelectorAll('.slider__item'),
      arrows = slider.querySelector('.slider__button'),
      prev = slider.querySelector('.slider__button_prev'),
      next = slider.querySelector('.slider__button_next'),
      slideWidth = parseFloat(slides[0].offsetWidth),
      slideIndex = 0,
      posInit = 0,
      posX1 = 0,
      posX2 = 0,
      posY1 = 0,
      posY2 = 0,
      posFinal = 0,
      isSwipe = false,
      isScroll = false,
      allowSwipe = true,
      transition = true,
      nextTrf = 0,
      prevTrf = 0,
      lastTrf = --slides.length * slideWidth,
      posThreshold = slides[0].offsetWidth * 0.35,
      trfRegExp = /([-0-9.]+(?=px))/,
      swipeStartTime,
      swipeEndTime,
      first = true;


    let finance_desc = slider.querySelectorAll('.finance__desc');
    slideWidth = parseFloat(slides[0].offsetWidth);

    function slide(w) {
      if(w == 'next' && slideIndex - 1 == 8){
        slideIndex = -1;
        sliderTrack.style.transition = 'transform 0s';
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + slideWidth}px, 0px, 0px)`;
        slideIndex++;
      } else if(w == 'prev' && slideIndex + 1 == 0){
        slideIndex = 9;
        sliderTrack.style.transition = 'transform 0s';
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + slideWidth}px, 0px, 0px)`;
        slideIndex--;
      }

      setTimeout(() => {
        slides.forEach((elem) =>{
          elem.classList.remove('finance__item_active');
          elem.classList.remove('finance__item_o9');
          elem.classList.remove('finance__item_light');
        });
        finance_desc.forEach((desc, index) => {
          if(index == slideIndex) {
            desc.classList.add('finance__desc_active');
          } else {
            desc.classList.remove('finance__desc_active');
          }
          
        });

        finance_desc[slideIndex].classList.add('finance__desc_active');
        slides[slideIndex + 4].classList.add('finance__item_active');
        slides[slideIndex + 3].classList.add('finance__item_light');
        slides[slideIndex + 4].classList.add('finance__item_light');
        slides[slideIndex + 5].classList.add('finance__item_light');

        slides[slideIndex + 2].classList.add('finance__item_o9');
        slides[slideIndex + 6].classList.add('finance__item_o9');




        sliderTrack.style.transition = 'transform .4s';
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + slideWidth}px, 0px, 0px)`;
      }, 10);
      
      
      

      
      
      
     
     
    }
    sliderTrack.style.transition = 'transform 0s';
    sliderTrack.style.transform = `translate3d(${slideWidth}, 0px, 0px)`;
    sliderList.classList.add('grab');

    sliderTrack.addEventListener('transitionend', () => allowSwipe = true);

    next.addEventListener('click', () => {
      if(!next.classList.contains('slider__button_disabled')){
        slideIndex++;
        slide('next');
      }
    });
    prev.addEventListener('click', () => {
      if(!prev.classList.contains('slider__button_disabled')){
        slideIndex--;
        slide('prev');
      } 
    });
    slide('next');


    slides.forEach((item, index) => {

      item.addEventListener('click', () => {
        if(index - 4 < 0) {
          slideIndex = 9;
          sliderTrack.style.transition = 'transform 0s';
          sliderTrack.style.transform = `translate3d(-${slideWidth * slideIndex + slideWidth}px, 0px, 0px)`;
          sliderList.classList.add('grab');
          slideIndex = 9 - (4 - index);
        } else if(index - 4 > 8) {
          slideIndex = -1;
          sliderTrack.style.transition = 'transform 0s';
          sliderTrack.style.transform = `translate3d(-${slideWidth * slideIndex + slideWidth}px, 0px, 0px)`;
          sliderList.classList.add('grab');
          slideIndex = index - 4 - 9;
        }
         else {
          slideIndex = index - 4;
        }
        setTimeout(slide, 10);
      });

    });

    finance_desc.forEach((elem) => {
      elem.addEventListener('mouseover', () => {
        slider.querySelector('.finance__item_active').querySelector('.finance__date').classList.add('finance__date_active');
      });
      elem.addEventListener('mouseout', () => {
        slider.querySelector('.finance__item_active').querySelector('.finance__date').classList.remove('finance__date_active');
      });
    });
  } else {

    slider_init(0);

     
  }



}

let publications = document.querySelector('.publications'),
  publ_btns = publications.querySelectorAll('.slider-nav__link'),
  publ_grids = publications.querySelectorAll('.slider-wrapper');

publ_btns.forEach((link, index) => {
  link.addEventListener(('click'), () => {
    publ_grids.forEach((grid) => {
      grid.classList.add('publications_hidden');
    });
    publ_btns.forEach((btn) => {
      btn.classList.remove('slider-nav__link_active');
    });
    link.classList.add('slider-nav__link_active');
    publ_grids[index].classList.remove('publications_hidden');
    qwe = index;
    slider_init(index);
    
  });
  
});






