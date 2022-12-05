let stars = document.querySelectorAll('.physics__star'),
	descs = document.querySelectorAll('.physics__desc');

stars.forEach((star, index) => {

	star.addEventListener('click', () => {
		stars.forEach((el) => {el.classList.remove('physics__star_active')});
		star.classList.add('physics__star_active');

		descs.forEach((el) => {el.classList.remove('physics__desc_active')});
		switch(index) {
			case 0: 
				descs[0].classList.add('physics__desc_active');
				break;
			case 1: descs[1].classList.add('physics__desc_active'); break;
			case 2: ;
			case 3: 
				stars[2].classList.add('physics__star_active');
				stars[3].classList.add('physics__star_active');
				descs[2].classList.add('physics__desc_active');
				break;
			case 4: 
				stars[3].classList.add('physics__star_active');
				descs[3].classList.add('physics__desc_active');
				break;
		}
	});
});
