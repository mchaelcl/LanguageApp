<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

$user = 'root';
$password = '';
$database = 'languageapp';
$servername = 'localhost';

$mysqli = new mysqli($servername, $user, $password, $database);

if ($mysqli->connect_error) {
    die("Connect Error " . $mysqli->connect_errno);
}

$sqlget = "SELECT module_title FROM module";
$result = $mysqli->query($sqlget);

$resultArray = [];
while($row = $result->fetch_assoc()){
    $resultArray[] = $row;
}

$send_json = json_encode($resultArray);
echo $send_json;


$mysqli->close();
?>