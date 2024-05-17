//button to-up
toTop = document.querySelector('#to-top');
if(toTop){
	toTop.addEventListener('click', () => {
		el = document.querySelector('.header');
		el.scrollIntoView({
			behavior: 'smooth'
		});
	})
}