		let position = 0;
		let colvo=0;
		const markerColor ='#fff';
		const markerActiveColor = '#008170';
		const slidesToShow = 1;
		const slidesToScroll = 1;
		const marker = document.querySelectorAll('.slider__marker');
		const container = document.querySelector('.slider-container');
		const track = document.querySelector('.slider-track');
		const items = document.querySelectorAll('.slider__item');
		const btnPrev = document.querySelector('.btn-prev');
		const btnNext = document.querySelector('.btn-next');
		const itemsCount = items.length;
		const itemWidth = container.clientWidth / slidesToShow;
		const movePosition = slidesToScroll * itemWidth;
		items.forEach((item) =>{
			item.style.minWidth = itemWidth+'px';
		});
		btnNext.addEventListener('click', () =>{
			const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
			position-= itemsLeft>= slidesToScroll ? movePosition : itemsLeft * itemWidth;
			colvo++;
			setPosition();
			checkBtns();
		});
		btnPrev.addEventListener('click', () =>{
			const itemsLeft =Math.abs(position) / itemWidth;
			position+= itemsLeft>= slidesToScroll ? movePosition : itemsLeft * itemWidth;
			colvo--;
			setPosition();
			checkBtns();
		});
		const setPosition = () => {
			track.style.transform = `translateX(${position}px)`;
		};
		function checkBtns(){
			for(var i=0;i<itemsCount;i++){
				marker[i].style.background = markerColor;
			}
			marker[colvo].style.background = markerActiveColor;
			if(position === 0){
				btnPrev.style= 'visibility:hidden';
			}
			else{
				btnPrev.style = 'visibility: visible';
			}
			if(position <= -(itemsCount - slidesToShow) * itemWidth){
				btnNext.style= 'visibility:hidden';
			}
			else{
				btnNext.style= 'visibility:visible';
			}
		}

		checkBtns();