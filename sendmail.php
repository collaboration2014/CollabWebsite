<?php
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($visitor_email))
{
	echo "Name and email are mandatory!";
	exit;
}

$email_from = 'abeldan@flemingcollege.ca';
$email_subject = "New Form Submission";
$email_body = "You have recieved a new message from user $name.\n".
	"email address: $visitor_email\n".
	"Message:\n $message".
$to = "abeldan@flemingcollege";
$headers = "From: $email_from \r\n";
mail($to,$email_subject,$email_body,$headers);
echo "Email sent successfully";
exit;