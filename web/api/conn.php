<?php

 // $servername = "localhost";
 // $username = "root";
 // $password = "";
 // $dbname = "omicdb";

$servername = "127.0.0.1";
$username = "omiccu0_user";
$password = "Harder01!";
$dbname = "omiccu0_main";

$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>