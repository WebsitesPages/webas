<?php

// Verbindung zur Datenbank herstellen
$conn = new mysqli("sql106.epizy.com", "epiz_34039669","McQRCLueMU", "epiz_34039669_testkontaktformular");
$conn->set_charset("utf8mb4");
// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindungsfehler: " . $conn->connect_error);
}
?>
