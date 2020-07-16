<?php
//Для начала проверим есть ли данные в полях name и email, что бы не слать совсем пустые формы :)
//Если всё в порядке, то работаем дальше
if (isset($_POST["name"]) && isset($_POST["email"]) ) {

//Принимаем данные POST-запроса и записываем значения в переменные

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

//Теперь давайте настроим куда отправляем и откуда

$my_email = 'borodat_for@mail.ru'; // Куда отправляем
$sender_email = '<borodat_for@mail.ru>'; // От кого отправляем
$title = "Посетитель сайта хочет связаться с вами";

//Сообщение, которое приходит на почту со всеми нужными нам данными:

$mes = "
 Имя: $name\n
 Телефон: $phone\n
 E-mail: $email\n
";

//Всё, теперь можно отправлять письмо на почту

$send = mail ($my_email,$title,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sender_email");

}

?>
