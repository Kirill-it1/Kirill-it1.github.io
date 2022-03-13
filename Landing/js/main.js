(function () {
	const header = document.querySelector('.header');
	window.onscroll = () =>{
		if(window.pageYOffset>50){
			header.classList.add('header_active');	}
		else{
			header.classList.remove('header_active');
		}
	};
}());


(function () {
	const burger = document.querySelector('.burger');
	const close_btn = document.querySelector('.header__menu-close');
	const menu = document.querySelector('.header__menu');
	burger.addEventListener('click', () =>{
		menu.classList.add('header__menu_active');
	});
	close_btn.addEventListener('click', () =>{
		menu.classList.remove('header__menu_active');
	});
}());