const links = document.querySelectorAll('.header-nav__link');
const CLASS_ACTIVE_LINK = 'header-nav__link_active';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');



links.forEach((link)=>{

  link.addEventListener('click', (e) => {
  	e.preventDefault();
    let hash = link.href.replace(/[^#]*(.*)/, '$1');
    
    location.hash = hash;
    active_link(hash);
    menu.classList.remove('header__menu_active');
	header.classList.remove('header_active');
	burger.classList.remove('header__burger_active');
	document.querySelector('body').style.overflow = '';
  }, false);
});

let active_link = (hr) => {
	let something = false;
	links.forEach((link) => {
		let hash = link.href.replace(/[^#]*(.*)/, '$1');
		
		if(hash == hr){
			link.classList.add(CLASS_ACTIVE_LINK);
			something = true;
		} else {
			link.classList.remove(CLASS_ACTIVE_LINK);
		}
	});
	if(something === false) {
		links[0].classList.add(CLASS_ACTIVE_LINK);
		something = true;
	}
}	

active_link(location.hash);






burger.addEventListener('click', () => {
	menu.classList.toggle('header__menu_active');
	header.classList.toggle('header_active');
	flag = burger.classList.toggle('header__burger_active');
	if(flag) {
		document.querySelector('body').style.overflow = 'hidden';
	} else {
		document.querySelector('body').style.overflow = '';
	}
});

