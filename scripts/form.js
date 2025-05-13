const messageForUserBlock = document.querySelector('.message-for-user');
const messageForUserTitle = document.querySelector('.message-for-user__title');
const messageForUserText = document.querySelector('.message-for-user__text');


const isValidName = (text) => {
	text = text.replace(/\s/g, '')
	const regExp = /^(?:[A-Za-z]{2,}|[А-Яа-яЁё]{2,})$/
	return regExp.test(text)
}
const isValidEmail = (text) => {
	text = text.replace(/\s/g, '')
	const regExp = /^[a-z-_.]+@[a-z]+\.[a-z]+$/i
	return regExp.test(text)
}
const viewMessage = (success, title, text) => {
	if (success) {
		messageForUserBlock.classList.add('message-for-user_success')
		messageForUserBlock.classList.remove('message-for-user_error')
	} else {
		messageForUserBlock.classList.add('message-for-user_error')
		messageForUserBlock.classList.remove('message-for-user_success')
	}
	messageForUserBlock.classList.add('message-for-user_visible');
	setTimeout(() => {messageForUserBlock.classList.remove('message-for-user_visible');}, 3000);
	messageForUserTitle.innerHTML = title;
	messageForUserText.innerHTML = text;

}
let form = document.querySelector('.order-form');
const named = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const checkValues = () => {
	const vn = isValidName(named.value)
	const vem = isValidEmail(email.value)

	if (named.value.length && email.value.length && message.value.length && vn && vem) {
		return true
	} 
	if (named.value.length && !vn) {
		viewMessage(false, 'Ошибка', 'Некорректное имя')
	} else if (email.value.length && !vem) {
		viewMessage(false, 'Ошибка', 'Некорректная почта')
	} else {
		viewMessage(false, 'Заполните все поля формы!', '')
	}
	return false

}
form.addEventListener('submit', submitHandler)
function submitHandler(e){
	e.preventDefault();
	if (checkValues()) {
		fetch("send.php", {
			method: "POST",
			body: new FormData(form)
		})
		.then(function(json) { 
			viewMessage(true, 'Письмо отправлено, мы скоро с Вами свяжемся!', '')
			named.value = ''
			email.value = ''
			message.value = ''
		})
		// .catch(function(back) {});
	}
}
