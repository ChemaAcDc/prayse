<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'dirgral.prayse@gmail.com';
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $nombre = $_POST['name'];
	$email = $_POST['email'];
	$asunto = $_POST['subject'];
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['message'];


	if(mail('dirgral.prayse@gmail.com', $asunto, $mensaje)){
    $contacto->honeypot = $_POST['first_name'];
    echo $contact->send();
    echo "Correo enviado";
	}
?>