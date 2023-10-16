document.addEventListener('DOMContentLoaded', () => {

let winWidth = window.screen.width;
function slider_init(q, ind) {
  let slid = document.querySelector('#publications-slider');
  let slider = q,
  sliderList = slider,
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slider__item'),
  arrows = slid.querySelectorAll('.slider-buttons')[ind],
  prev = arrows.querySelector('.slider__button_prev'),
  next = arrows.querySelector('.slider__button_next'),
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
  th = 3,
  margin = 40;
 
  if(window.screen.width < 1285) {
    th = 2;

  }
  if(window.screen.width < 1025) {
    margin = 20;
  }
  if(window.screen.width < 705) {
    margin = 15;
  }
  if(window.screen.width <= 580) {
    th = 1;
  }
  function itemWidth() {
   if(Math.floor(sliderList.offsetWidth / slides[0].offsetWidth) >= slides.length){
      next.classList.add('slider__button_disabled');
   }
   else{
      next.classList.remove('slider__button_disabled');
    }
    slides.forEach((slide)=>{
      if(window.screen.width <= 580) {
        slideWidth = 250;
      } else {
        slideWidth = (sliderTrack.offsetWidth - ((th - 1) * margin)) / th;
      }
      slide.style.width = `${slideWidth}px`;
    });
  }
  itemWidth();
  let lastTrf = --slides.length * slideWidth,
    posThreshold = slides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    swipeStartTime,
    swipeEndTime;
  let getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  }
  function slide() {

    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    if(slides.length - Math.floor(sliderList.offsetWidth / slideWidth) >= slideIndex){
      
       slides.forEach((elem) =>{
      elem.classList.remove('slider__item_active');
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

  function swipeStart() {
  let evt = getEvent();


  if (allowSwipe && window.innerWidth<1500) {

    swipeStartTime = Date.now();
    
    transition = true;

    nextTrf = (slideIndex + 1) * -slideWidth;
    prevTrf = (slideIndex - 1) * -slideWidth;



    posInit = posX1 = evt.clientX;
    posY1 = evt.clientY;


    sliderTrack.style.transition = '';

    slider.addEventListener('touchmove', swipeAction);
    slider.addEventListener('mousemove', swipeAction);
    slider.addEventListener('touchend', swipeEnd);
    slider.addEventListener('mouseup', swipeEnd);

    sliderList.classList.remove('grab');
    sliderList.classList.add('grabbing');
  }
}
function swipeAction() {
  let evt = getEvent(),
    style = sliderTrack.style.transform,
    transform = +style.match(trfRegExp)[0];

  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;



  posY2 = posY1 - evt.clientY;
  posY1 = evt.clientY;

  if (!isSwipe && !isScroll) {
    let posY = Math.abs(posY2);
    if (posY > 7 || posX2 === 0) {
      isScroll = true;
      allowSwipe = false;
    } else if (posY < 7) {
      isSwipe = true;
    }
  }

  if (isSwipe) {
    if (slideIndex === 0) {
      if (posInit < posX1) {
        setTransform(transform, 0);
        return;
      } else {
        allowSwipe = true;
      }
    }

    // запрет ухода вправо на последнем слайде
    if (slideIndex === slides.length - th) {
      if (posInit > posX1) {
        setTransform(transform, lastTrf);
        return;
      } else {
        allowSwipe = true;
      }
    }

    if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
      reachEdge();
      return;
    }

    sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
  }

}


function swipeEnd() {
  posFinal = posInit - posX1;

  isScroll = false;
  isSwipe = false;

  slider.removeEventListener('touchmove', swipeAction);
  slider.removeEventListener('mousemove', swipeAction);
  slider.removeEventListener('touchend', swipeEnd);
  slider.removeEventListener('mouseup', swipeEnd);

  sliderList.classList.add('grab');
  sliderList.classList.remove('grabbing');

  if (allowSwipe) {
    swipeEndTime = Date.now();
    if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
      if (posInit < posX1) {
        slideIndex--;

      } else if (posInit > posX1) {
        slideIndex++;
      }
    }

    if (posInit !== posX1) {
      allowSwipe = false;
      slide();
    } else {
      allowSwipe = true;
    }

  } else {
    allowSwipe = true;
  }

}

let setTransform = function(transform, comapreTransform) {
  if (transform >= comapreTransform) {
    if (transform > comapreTransform) {
      sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
    }
  }
  allowSwipe = false;
}
reachEdge = function() {
  transition = false;
  swipeEnd();
  allowSwipe = true;
}

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

  next.addEventListener('click', () => {
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

let slid = document.querySelector('#publications-slider'),
  s = slid.querySelectorAll('.slider-wrapper');
s.forEach((sl, index) => {
  slider_init(sl, index);
});
window.addEventListener('resize', () => {
  if(window.screen.width != winWidth)
    location.reload();
});

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
    let consta = slideWidth + (7 * slideWidth - sliderTrack.offsetWidth) / 2;
    window.addEventListener('resize', () => {
      slideWidth = parseFloat(slides[0].offsetWidth);
      consta = slideWidth + (7 * slideWidth - sliderTrack.offsetWidth) / 2;
      slide();
    });
    function slide(w) {
      if(w == 'next' && slideIndex - 1 == 5){
        slideIndex = -1;
        sliderTrack.style.transition = 'transform 0s';
        if(Math.abs(Math.ceil(slideIndex * slideWidth + consta)) == 0){
          sliderTrack.style.transform = `translate3d(0px, 0px, 0px)`;
        } else {
          sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
        }

        slideIndex++;
      } else if(w == 'prev' && slideIndex + 1 == 0){
        slideIndex = 6;
        sliderTrack.style.transition = 'transform 0s';
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
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
        slides[slideIndex + 3].classList.add('finance__item_light');
        slides[slideIndex + 4].classList.add('finance__item_active');
        slides[slideIndex + 4].classList.add('finance__item_light');
        slides[slideIndex + 5].classList.add('finance__item_light');

        slides[slideIndex + 2].classList.add('finance__item_o9');
        slides[slideIndex + 6].classList.add('finance__item_o9');


        sliderTrack.style.transition = 'transform .3s ';
        if(Math.abs(Math.ceil(slideIndex * slideWidth + consta)) == 0) {
          sliderTrack.style.transform = `translate3d(0px, 0px, 0px)`;
        } else {
          sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
        }
      }, 0);
      
      
      

      
      
      
     
     
    }
    sliderTrack.style.transition = 'transform 0s';
    sliderTrack.style.transform = `translate3d(-${consta}px, 0px, 0px)`;
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


          if(index < 4) {
            if(slideIndex != 0) {
              slideIndex = 0;
              slide('prev');
              setTimeout(() => {
                slideIndex = 10 - 4;
                sliderTrack.style.transition = 'transform 0s';
                sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
              }, 200);
              setTimeout(() => {
                slideIndex = index + 6 - 4;
                slide('prev');
              }, 250);
            } else {
              slideIndex = 10 - 4;
              sliderTrack.style.transition = 'transform 0s';
              sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
              setTimeout(() => {
                slideIndex = index + 6 - 4;
                slide('prev');

              }, 100);
            }
            
          } else if(index > 9) {
            if(slideIndex != 5) {
              slideIndex = 5;
              slide('next');
              setTimeout(() => {
                slideIndex = 3 - 4;
                sliderTrack.style.transition = 'transform 0s';
                if(Math.abs(Math.ceil(slideIndex * slideWidth + consta)) == 0) {
                  sliderTrack.style.transform = `translate3d(0px, 0px, 0px)`;
                } else {
                  sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
                }
              }, 200);
              setTimeout(() => {
                slideIndex = index - 6 - 4;
                slide('next');
              }, 250);
            } else {
              slideIndex = 3 - 4;
              sliderTrack.style.transition = 'transform 0s';
              if(Math.abs(Math.ceil(slideIndex * slideWidth + consta)) == 0) {
                sliderTrack.style.transform = `translate3d(0px, 0px, 0px)`;
              } else {
                sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth + consta}px, 0px, 0px)`;
              }
              
              setTimeout(() => {
                slideIndex = index - 6 - 4;
                slide('next');
              }, 100);
            }
          }
           else {
            slideIndex = index - 4;
            slide();
          }    

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
  } 



}

let publications = document.querySelector('.publications'),
  publ_btns = publications.querySelectorAll('.slider-nav__link'),
  publ_grids = publications.querySelectorAll('.slider-wrapper'),
  publ_buttons = publications.querySelectorAll('.slider-buttons');

publ_btns.forEach((link, index) => {
  link.addEventListener(('click'), () => {
    publ_grids.forEach((grid) => {
      grid.classList.add('publications_hidden');
    });
    publ_btns.forEach((btn) => {
      btn.classList.remove('slider-nav__link_active');
    });
    publ_buttons.forEach((buttons, ind) => {
      if(index != ind) {
        buttons.style.display = 'none';
      } else {
        buttons.style.display = '';
      }
    });
    
    link.classList.add('slider-nav__link_active');
    publ_grids[index].classList.remove('publications_hidden');
  });
  
});






});