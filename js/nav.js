const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const upper = document.querySelector('.upper');

let activeNav = false
const hid_nav = () => {
	burger.classList.toggle('header-burger_active');
  nav.classList.toggle('header__nav_active');
  header.classList.toggle('header_active');
  upper.classList.toggle('upper_active');
  document.querySelector('body').classList.toggle('body_noscroll')
	if (activeNav) {
		activeNav = false
	}
	else	{
		 activeNav = true
	}


}


document.addEventListener('click', (e) => {
	console.log(activeNav)
	if (activeNav && !e.target.closest('.header'))
		hid_nav()
});
burger.addEventListener('click', () => { 
  hid_nav()
});