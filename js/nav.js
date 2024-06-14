const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const upper = document.querySelector('.upper');

let activeNav = false
burger.addEventListener('click', () => { 
  burger.classList.toggle('header-burger_active');
  nav.classList.toggle('header__nav_active');
  header.classList.toggle('header_active');
  upper.classList.toggle('upper_active');
  document.querySelector('body').classList.toggle('body_noscroll')




});