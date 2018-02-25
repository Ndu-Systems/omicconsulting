<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
    
    $id = $data->id;
    $employer = $data->employer; 
	$contactperson = $data->contactperson;	 
	$cell = $data->cell;
    $email = $data->email;
    $position    =  $data->position;
    $location= $data->location;  	 
	$industry = $data->industry;
    $experience = $data->experience;
    $closedate = $data->closedate;
    $requirements    =  $data->requirements;
    $postdate = $data->postdate; 
    $isactive    =  $data->isactive;

        $sql = "
                UPDATE  vacancies  SET           
				 Employer = '$username', 
				 ContactPerson ='$email',
                 Email ='$password',
                 Position ='$isActive',
                 Location = '$role',
                 IsActive ='$isActive'
                 Location = '$role',
                 IsActive ='$isActive'
                 Location = '$role',
                 IsActive ='$isActive'
                 Location = '$role',
                 IsActive ='$isActive',                 
                 IsActive ='$isActive'
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
