<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) ){
	$name		 = $data->name; 
	$surname 	= $data->surname;	 
	$idnumber 	= $data->idnumber;
    $email		 = $data->email;
	$cv 	= $data->cv;
	$jobId		 =$data->jobId;
	$tel  =$data->tel;
    
        $sql = "INSERT INTO applications VALUES ('','$name','$surname','$idnumber','$email','$cv',$jobId,'$tel','Active')";        
        
        if ($conn->query($sql) === TRUE) {
            echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }       
        
 
}
 else {

	echo json_encode( "500");
}
?>
