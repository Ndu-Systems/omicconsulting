<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
    
    $id = $data->id;
    $position = $data->position; 
	$location = $data->location;	 
	$industry = $data->industry;
    $availability = $data->availability;
    $vacancyid  = $data->vacancyid;
    $cv           =  $data->cv;
        $sql = "
                UPDATE  candidate  SET           	 
				 Position = '$position', 
				 Location ='$location',
                 Industry ='$industry',
                 Availability ='$availability',
                 VacancyId = '$vacancyid',
                 Cv = '$cv'
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
