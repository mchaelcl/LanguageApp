<?php

function cors() { 
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
    echo "You have CORS!";
}

//https://stackoverflow.com/questions/8719276/cross-origin-request-headerscors-with-php-headers

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