<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->position) ){
	$position = $data->position; 
    $email = $data ->email;
	$location = $data->location;	 
	$industry = $data->industry;
    $availability = $data->availability;
	$Cv = $data->cv;
    
        $sql = "INSERT INTO `candidate`(`Position`,`email`, `Location`, `Industry`, `Availability`, `VacancyId`, `Cv`,`IsActive`)
                                         VALUES ('$position','$email','$location','$industry','$availability','','$Cv',1)";        
        
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
