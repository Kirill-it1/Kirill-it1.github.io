const iphoneimg = document.querySelector('#iphone');
	const ipadimg = document.querySelector('#ipad');
	const imacimg = document.querySelector('#imac');

	const btniphone = document.querySelector('#iphone-list');
	const btnipad = document.querySelector('#ipad-list');
	const btnimac = document.querySelector('#imac-list');
	btniphone.addEventListener('click',()=>{
		iphoneOn();
	});
	btnipad.addEventListener('click',()=>{
		ipadOn();
	});
	btnimac.addEventListener('click',()=>{
		imacOn();
	});
	function iphoneOn(){
		iphoneimg.style.display = 'block';
		btniphone.style.backgroundImage = "url('img/case studies/iphone-icon_active.png')";

		ipadimg.style.display = 'none';
		btnipad.style.backgroundImage = "url('img/case studies/ipad-icon.png')";

		imacimg.style.display = 'none';
		btnimac.style.backgroundImage = "url('img/case studies/imac-icon.png')";
	}
	function ipadOn(){
		iphoneimg.style.display = 'none';
		btniphone.style.backgroundImage = "url('img/case studies/iphone-icon.png')";

		ipadimg.style.display = 'block';
		btnipad.style.backgroundImage = "url('img/case studies/ipad-icon_active.png')";

		imacimg.style.display = 'none';
		btnimac.style.backgroundImage = "url('img/case studies/imac-icon.png')";
	}
	function imacOn(){
		iphoneimg.style.display = 'none';
		btniphone.style.backgroundImage = "url('img/case studies/iphone-icon.png')";

		ipadimg.style.display = 'none';
		btnipad.style.backgroundImage = "url('img/case studies/ipad-icon.png')";

		imacimg.style.display = 'block';
		btnimac.style.backgroundImage = "url('img/case studies/imac-icon_active.png')";
	}