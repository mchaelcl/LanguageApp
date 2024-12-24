<?php

$user = 'root';
$password = '';
$database = 'languageapp';
$servername = 'localhost';

$mysqli = new mysqli($servername, $user, $password, $database);

if ($mysqli->connect_error) {
    die("Connect Error " . $mysqli->connect_errno);
}

// $sql = "INSERT INTO words (english, mandarin, lesson_id) 
// VALUES ('me', 'wo1', 1)";

$sqlget = "SELECT module_title FROM module";
$result = $mysqli->query($sqlget);

$resultArray = [];
while($row = $result->fetch_assoc()){
    $resultArray[] = $row;
}
header('Content-Type: application/json');
$send_json = json_encode($resultArray);
echo $send_json;


// if($result->num_rows > 0){
//     while($row = $result->fetch_assoc()){
//         echo "english: " . $row["english"]. " - Mandarin " . $row["mandarin"]. "<br>"; 
//     }
// }

// else {
//     echo "0 results";
// }

// if ($mysqli->query($sql) === TRUE) {
//     echo "New record created";
// } else {
//     echo "Error: " . $sql . "<br>" . $mysqli->error;
// }

$mysqli->close();
?>