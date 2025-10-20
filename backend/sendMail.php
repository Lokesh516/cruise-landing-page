<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit();
}

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

$mail = new PHPMailer(true);

try {
  // SMTP Configuration
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'karma.cruise.info@gmail.com';
  $mail->Password = 'womdcgbflnmajovq';             
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // Form Data
  $firstName     = $_POST['firstName'] ?? '';
  $lastName      = $_POST['lastName'] ?? '';
  $email         = $_POST['email'] ?? '';
  $phone         = $_POST['phone'] ?? '';
  if ($phone && strpos($phone, '+') !== 0) {
    $phone = '+' . $phone;
  }
  $dob           = $_POST['dob'] ?? '';
  $maritalStatus = $_POST['maritalStatus'] ?? '';
  $passport      = $_POST['passport'] ?? '';
  $package       = $_POST['package'] ?? '';
  $message       = $_POST['message'] ?? '';
  $consent1      = (!empty($_POST['consent1']) && $_POST['consent1'] === 'true') ? 'Yes' : 'No';
  $consent2      = (!empty($_POST['consent2']) && $_POST['consent2'] === 'true') ? 'Yes' : 'No';

  // Email Headers
  // Sender email and name
  $mail->setFrom('karma.cruise.info@gmail.com', 'Karma Cruise Enquiry');

  // Reply goes to the user who submitted the form
  $mail->addReplyTo($email, "$firstName $lastName"); 

  // Receiver email where enquiries are sent
  $mail->addAddress('lokeshyadav31290@gmail.com');

  // Email Content
  $mail->Subject = 'New Cruise Enquiry';
  $mail->Body = <<<EOT
New enquiry received:

Name: $firstName $lastName
Email: $email
Phone: $phone
Date of Birth: $dob
Marital Status: $maritalStatus
Passport: $passport
Package: $package
Message: $message

Consent 1: $consent1
Consent 2: $consent2
EOT;

  $mail->send();
  echo json_encode(['success' => true]);
} catch (Exception $e) {
  echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
