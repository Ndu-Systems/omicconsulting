<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){
	$username = $data->username;
    $email= $data->email;
	$password = $data->password;	 
	$isActive = $data->isactive;
    $role     = $data->role;

    if ($conn->query("SELECT * FROM users WHERE email = '$email'")->num_rows == 0) {
        $sql = "INSERT INTO `users`(`Username`, `Password`, `Email`, `Role`, `IsActive`) VALUES ('$username','$password','$email','$role','$isActive')";        
        
        if ($conn->query($sql) === TRUE) {
            echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }       
        
    }
	else{
		echo "Email address already used choose a different one or go to Login";
	}
}
 else {

	echo json_encode( "500");
}
?>
