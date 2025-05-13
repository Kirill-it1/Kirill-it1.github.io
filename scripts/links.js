document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (anchor.classList.contains('header-nav__link')) {
			document.querySelectorAll('.header-nav__link').forEach(link => {
				if (link.getAttribute('href') === href) {
					link.classList.add('header-nav__link_active')
				} else {
					link.classList.remove('header-nav__link_active')
				}
			});
		}
		e.preventDefault();
		
		let el = '';
		if (href !== '#top') {
			el = document.querySelector(this.getAttribute('href'));
			el.scrollIntoView({
				behavior: 'smooth'
			});
		} else {
			el = document.querySelector('.header');
			el.scrollIntoView({
				behavior: 'smooth'
			});
		}

	});
});

window.addEventListener('scroll', () => {
	const toTop = document.querySelector('.to-top');
	if (window.scrollY < 40){
		toTop.classList.remove('to-top_visible')
		document.querySelectorAll('.header-nav__link').forEach(el => {
			el.classList.remove('header-nav__link_active')
		});
		document.querySelectorAll('.header-nav__link')[0].classList.add('header-nav__link_active')
	} else {
		toTop.classList.add('to-top_visible')
	}
});
