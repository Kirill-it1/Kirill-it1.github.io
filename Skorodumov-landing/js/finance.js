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


  console.log(slideWidth);
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
    });
    console.log(slideIndex);
    finance_desc.forEach((desc, index) => {
      if(index == slideIndex) {
        desc.classList.add('finance__desc_active');
      } else {
        desc.classList.remove('finance__desc_active');
      }
      
    });
    
    finance_desc[slideIndex].classList.add('finance__desc_active');
    slides[slideIndex+4].classList.add('finance__item_active');
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