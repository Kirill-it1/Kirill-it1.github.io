<?php 
	$name = trim(urldecode(htmlspecialchars($_POST['name'])));
	$email= trim(urldecode(htmlspecialchars($_POST['email'])));
	$message = trim(urldecode(htmlspecialchars($_POST['message'])));

	if ($name && $email && $message && mail(
		"kirill-it@mail.ru",
		"Новое письмо c лэндинга",
		"Email: ${email} \n
		Name: ${name} \n 
		Message: ${message}",
		"From landing"
	)) {
		echo("Успешно");
	} else {
		echo("Не успешно");
	}
	unset($_POST['name']);
	unset($_POST['email']);
	unset($_POST['message']);

?>