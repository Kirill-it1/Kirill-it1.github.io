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
	});
	
});