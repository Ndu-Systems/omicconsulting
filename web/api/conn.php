<?php

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "omicdb";

//$servername = "127.0.0.1";
//$username = "ndusys0_makhawin";
//$password = "xVeQFh8Rc0MfnMf";
//$dbname = "ndusys0_makhawinidb";


$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>