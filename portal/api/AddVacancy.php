<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){
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
    $isactive = "1";


    $sql = "INSERT INTO `vacancies`(`Employer`, `ContactPerson`, `Cell`, `Email`, `Position`, `Location`, `Industry`, `Experience`, `CloseDate`, `Requirements`,`IsActive`)
                           VALUES ('$employer','$contactperson','$cell','$email','$position','$location','$industry','$experience','$closedate','$requirements','$isactive')";

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
