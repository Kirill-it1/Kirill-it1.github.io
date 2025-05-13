const anims = document.querySelectorAll('.anim');
if (anims.length) {
	function animOnScroll() {
		anims.forEach(animItem => {
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = 0;
			if (animItemHeight < window.innerHeight) {
				animItemPoint = window.innerHeight - animItemHeight / animStart;
			} else {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((window.scrollY > animItemOffset - animItemPoint) && (window.scrollY < animItemOffset + animItemHeight)) {
				animItem.classList.add('_active')
			} else {
				if (!animItem.classList.contains('one'))
					animItem.classList.remove('_active')
			}
		
		
		});
		
	}
	window.addEventListener('scroll', animOnScroll);
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	setTimeout(animOnScroll, 300);
}
