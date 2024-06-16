const width = window.innerWidth;
teams = document.querySelectorAll('.team-card');
if (width <= 900){
	const activeT = (i) => {
    teams.forEach((el) => {
      el.classList.remove('team-card_f')
    });
    teams[i].classList.add('team-card_f')
  }
	let heights = []
	
	teams.forEach((el) => {
		heights.push(el.getBoundingClientRect().top - el.offsetHeight / 1.5)
	});
	document.addEventListener('scroll', () => {
		let sc = 0;
		heights.forEach((el, ind) => {

			if (window.scrollY >= el) {
				sc = ind
			}
		});
		activeT(sc)
		
		
	});


} 