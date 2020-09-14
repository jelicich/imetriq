<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// require 'libs/PHPMailer/Exception.php';
// require 'libs/PHPMailer/PHPMailer.php';
// require 'libs/PHPMailer/SMTP.php';

require_once('libs/PHPMailer/PHPMailer.php'); 
require_once('libs/PHPMailer/Exception.php');
require_once('libs/PHPMailer/SMTP.php');

// TODO: add actual address
$EMAIL_ADDRESS_SENDER = 'info@imetriq.com';
$EMAIL_ADDRESS_RECEIVER = 'info@imetriq.com';


$err = false;
$msg = '';
$email = '';

if (!empty($_POST['name'])) {
    $name = substr(strip_tags($_POST['name']), 0, 255);
} else {
    $name = '';
    $msg .= 'Ingrese nombre. \n';
    $err = true;
}

if (!empty($_POST['email']) && PHPMailer::validateAddress($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $msg .= "Dirección de email invalida. \n";
    $err = true;
}

if (!$err) {
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'localhost';
    $mail->Port = 25;
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
        $msg .= 'Mensaje enviado!';
    }
}

$res = array(
    'error' => $err,
    'message' => $msg
);

echo json_encode($res);
