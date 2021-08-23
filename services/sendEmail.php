<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('libs/PHPMailer/PHPMailer.php'); 
require_once('libs/PHPMailer/Exception.php');
require_once('libs/PHPMailer/SMTP.php');

// Completar:
// Dirección de e-mail que va a usar el script para loggearse en el servidor y enviar el mensaje
$EMAIL_ADDRESS_SENDER = '****';
// Contraseña de la cuenta para loggearse en el servidor
$EMAIL_PASSWORD_SENDER = '****';
// Dirección de e-mail a la cual se va a enviar el mensaje
$EMAIL_ADDRESS_RECEIVER = '****';
// Dirección del servidor SMTP
$HOST_ADDRESS = '****';


$err = false;
$msg = '';
$email = '';

if (!empty($_POST['lang'])) {
    $lang = $_POST['lang'];
} else {
    $lang = 'en';
}

if (!empty($_POST['name'])) {
    $name = substr(strip_tags($_POST['name']), 0, 255);
} else {
    $name = '';
    $msg .= $lang == 'en' ? 'Name is mandatory. \n' : 'Ingrese nombre. \n';
    $err = true;
}

if (!empty($_POST['email']) && PHPMailer::validateAddress($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $msg .= $lang == 'en' ? 'Invalid e-mail address. \n' : 'Dirección de email invalida. \n';
    $err = true;
}

if (!$err) {
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = $HOST_ADDRESS;
    $mail->Port = 25;
    $mail->SMTPAuth = true;
    $mail->Username = $EMAIL_ADDRESS_SENDER;
    $mail->Password = $EMAIL_PASSWORD_SENDER;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    
    $mail->setFrom($EMAIL_ADDRESS_SENDER, (empty($name) ? 'Contact form' : $name));
    $mail->addAddress($EMAIL_ADDRESS_RECEIVER);
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Demo request from: ' . $name;
    $mail->Body = "Contact form submission\n\n Name: " . $name . "\n email: " . $email;
    
    if (!$mail->send()) {
        $err = true;
        $msg .= 'Mailer Error: '. $mail->ErrorInfo;
    } else {
        $msg .= $lang == 'en' ? 'Request sent!' : '¡Solicitud enviada!';
    }
}

$res = array(
    'error' => $err,
    'message' => $msg
);

echo json_encode($res);
