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
    hideMenu();
    
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
}	

active_link(location.hash);

menu.addEventListener('click', () => {
	hideMenu();
});

let hideMenu = () => {
	menu.classList.remove('header__menu_active');
	header.classList.remove('header_active');
	burger.classList.remove('header__burger_active');
	document.querySelector('body').style.overflow = '';
}



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






A: for(a = 1000; a > 0; a--){

	X: for(x = 0; x < 10000000; x++){

		if(!(((x&a) != 0) <= (((x&10) == 0) <= (x&3) != 0) )){
			continue A;
		}


	}
	console.log(a);

}