<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer-6.6.6/language/');
    $mail->isHTML(true);

    $mail->setFrom('disurfl@bk.ru', 'Пользователь фрик');

    $mail->addAddress('kulkov_2003@bk.ru');

    $mail->Subject = 'Привет это я твой клиент';

    $body = '<h1> Это твой новый проект </h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p>ИМЯ:'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['company']))){
        $body.='<p>Компания:'.$_POST['company'].'</p>';
    }
    if(trim(!empty($_POST['mail']))){
        $body.='<p>MAIL:'.$_POST['mail'].'</p>';
    }
    if(trim(!empty($_POST['description']))){
        $body.='<p>Описание:'.$_POST['description'].'</p>';
    }
    if(!empty($_FILES['image']['tmp_name'])){
        $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];

        if(copy($_FILES['image']['tmp_name'], $filePath)){
            $fileAttach = $filePath;
            $body.='<p>Макет в приложении</p>';
            $mail->addAttachment($fileAttach);
        }
    }

    $mail->Body = $body;

    if (!$mail->send()){
        $message = 'ошибка';
    }
    else{
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>