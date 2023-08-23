<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'connect.php';
require 'phpmailer/includes/Exception.php';
require 'phpmailer/includes/PHPMailer.php';
require 'phpmailer/includes/SMTP.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $bereitsWebseite = $_POST["bereitsWebseite"];
    $unterseitenAnzahl = $_POST["unterseitenAnzahl"];
    $texterstellung = $_POST["texterstellung"];
    $visuelleEffekte = $_POST["visuelleEffekte"];
    $fertigstellungsDatum = $_POST["fertigstellungsDatum"];
    $message = $_POST["message"];


    // Daten in der Datenbank speichern
    $sql = "INSERT INTO Webas (Name, Email, Telefonnummer, BereitsWebseite, UnterseitenAnzahl, Texterstellung, VisuelleEffekte, FertigstellungsDatum, Message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    if ($stmt) {
        $stmt->bind_param("sssssssss", $name, $email, $phone, $bereitsWebseite, $unterseitenAnzahl, $texterstellung, $visuelleEffekte, $fertigstellungsDatum, $message);
        $stmt->execute();
        $stmt->close();

// PHPMailer-Code hier einfügen (siehe oben)
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
try {
  // E-Mail-Einstellungen
  $mail->SMTPDebug = 0; // Debug-Modus deaktivieren
    $mail->isSMTP();
    $mail->Host = 'mail.privateemail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@webas-websites.com';
    $mail->Password = 'toDjas-cykmux-barwy8';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

  // Absender und Empfänger
  $mail->setFrom('info@webas-websites.com', 'Webas-Websites');
    $mail->addReplyTo($email, $name); // Fügt den Kunden zur Reply-To-Liste hinzu
    $mail->addAddress('info@webas-websites.com');
    $mail->addAddress('Mert280101@icloud.com'); // Fügt die gewünschte Weiterleitungsadresse hinzu

  // E-Mail-Inhalt
  $mail->isHTML(true);
    $mail->Subject = "Anfrage von $name: $email, ";
    $mail->Body = "Name: $name<br>Email: $email<br>Telefonnummer: $phone<br>Bereits eine Webseite: $bereitsWebseite<br>Anzahl Unterseiten: $unterseitenAnzahl<br>
    Texterstellung gewünscht: $texterstellung<br>Visuelle Effekte gewünscht: $visuelleEffekte<br>Fertigstellungsdatum: $fertigstellungsDatum<br>Nachricht: <br>" . nl2br($message);

  // E-Mail senden
  $mail->send();
} catch (Exception $e) {
  echo "Die E-Mail konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}";
  exit();
}
  } else {
      echo "Fehler: " . $sql . "<br>" . $conn->error;
      exit();
  }

// Bestätigungs-E-Mail an den Kunden senden
$customerMail = new PHPMailer(true);
$customerMail->CharSet = 'UTF-8';
try {
  // E-Mail-Einstellungen
  $customerMail->SMTPDebug = 0; // Debug-Modus deaktivieren
  $customerMail->isSMTP();
  $customerMail->Host = 'mail.privateemail.com';
  $customerMail->SMTPAuth = true;
  $customerMail->Username = 'info@webas-websites.com';
  $customerMail->Password = 'toDjas-cykmux-barwy8';
  $customerMail->SMTPSecure = 'ssl';
  $customerMail->Port = 465;

  // Absender und Empfänger
    $customerMail->setFrom('info@webas-websites.com', 'Webas-Websites');
    $customerMail->addAddress($email, $name);

  // E-Mail-Inhalt
  $customerMail->isHTML(true);
    $customerMail->Subject = "Anfrage erhalten";
    $customerMail->Body = "Hallo $name,<br><br>vielen Dank für Ihre Anfrage bei Webas-Websites. Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.<br><br>
    Wir schätzen Ihr Interesse an unseren Dienstleistungen und freuen uns darauf, Ihnen bei der Gestaltung und Umsetzung Ihrer Website behilflich zu sein.<br><br>
    Mit freundlichen Grüßen,<br>
    <br>Das Webas-Websites-Team";

  // E-Mail senden
  $customerMail->send();
} catch (Exception $e) {
  echo "Die Bestätigungs-E-Mail konnte nicht gesendet werden. Fehler: {$customerMail->ErrorInfo}";
  exit();
}

  // Datenbankverbindung schließen
  $conn->close();

  // Weiterleitung zur Bestätigungsseite oder einer anderen Seite
  header("Location: thankyou.html");
  exit();
}

?>
