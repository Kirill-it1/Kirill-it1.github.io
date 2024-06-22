const width = window.innerWidth;
teams = document.querySelectorAll('.team-card');
let heights = []
teams.forEach((el) => {
	heights.push(el.getBoundingClientRect().top - el.offsetHeight / 1.5)
});
let col1 = true
  for (let i = 0; i < heights.length - 1; i++){
    if(heights[i] == heights[i + 1]){
      col1 = false
      break;
    }
  }
if (col1){
	const activeT = (i) => {
    teams.forEach((el) => {
      el.classList.remove('team-card_f')
    });
    teams[i].classList.add('team-card_f')
  }
	
	
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