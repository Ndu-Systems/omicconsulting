<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

     $id = $data->id;
	$username = $data->username;
    $email= $data->email;
	$password = $data->password;
	$isActive = $data->isactive;
    $role     = $data->role;

        $sql = "
                UPDATE  users  SET
				 Username = '$username',
				 Email ='$email',
                 Password ='$password',
                 IsActive ='$isActive',
                 Role = '$role'
                 where Id = '$id'
                ";

        if ($conn->query($sql) === TRUE) {
            echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
?>
