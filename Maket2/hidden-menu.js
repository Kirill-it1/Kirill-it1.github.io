		const button = document.querySelector('.header__hidden-menu-icon');
		const hiddenMenu = document.querySelector('.header__menu-block');
		const line1 = document.querySelector('.hidden-menu-icon__line1');
		const line2 = document.querySelector('.hidden-menu-icon__line2');
		const line3 = document.querySelector('.hidden-menu-icon__line3');

		var x=0;
		button.addEventListener('click', ()=>{
			if(x==0){
				hiddenMenu.style.top = '0px';
				line3.style.opacity = '0';
				line1.style.top = '18px';
				line1.style.transform = 'rotate(45deg)';
				line2.style.transform = 'rotate(-45deg)';
				x++;
			}else{
				hiddenMenu.style.top = '-500px';
				line3.style.opacity = '1';
				line1.style.top = '0';
				line1.style.transform = 'rotate(0)';
				line2.style.transform = 'rotate(0)';
				x--;
			}
		});