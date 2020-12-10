<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name      = filter_var($_POST["user-name"], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST["user-email"], FILTER_SANITIZE_STRING);
	$phone = filter_var($_POST["user-phone"], FILTER_SANITIZE_STRING);
	$message = filter_var($_POST["user-message"], FILTER_SANITIZE_STRING);
	$errors;

	// В PHP добавить лишь проверку на пустоту
	// if (empty(переменная)) {
	// 		$errors = "Ошибка";
	// }
	if (empty($name)) {
		$errors .="Заполните поле ИМЯ";
	} else {
		$user_name = $name;
	}

	if (empty($email)) {
		$errors .="Заполните поле email";
	} else {
		$user_email = $email;
	}

	if (empty($phone)) {
		$errors .="Заполните поле Телефон";
	} else {
		$user_phone = $phone;
	}

	if (empty($message)) {
		$errors .="Заполните поле Сообщение";
	} else {
		$user_message = $message;
	}

	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "daryna2811@gmail.com";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Имя: " . $name . "\n";
	$mailBody .= "Почта: " . $email . "\n";
	$mailBody .= "Номер: " . $user_phone . "\n";
	$mailBody .= "Сообщение: " . $message . "\n";
	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'JS. ДЗ номер 4', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>