const moveToStart = (input) => {
  input.setSelectionRange(0,0);
  input.focus();
}

const select = document.querySelector('#country-select');
const choices = new Choices(select, {
	itemSelectText: '',
	position: 'bottom'
});
const selectedCountryFlag = document.querySelector('.contact-block__flag');
select.addEventListener('addItem', (event) => {
	// console.log(event.detail.value)
	selectedCountryFlag.style.backgroundImage = `url(../img/icons/flags/${event.detail.value}.png)`;
}, false);