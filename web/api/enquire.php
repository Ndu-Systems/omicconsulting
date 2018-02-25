<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->EmailAddress) ){
	$EmailAddress = $data->EmailAddress;
	$Company = $data->Company;
	$ContactNumber = $data->ContactNumber;
    $ContactPerson = $data->ContactPerson;
	$CandidateId = $data->CandidateId;
    $IsActive = $data-> IsActive;

    $sql = "INSERT INTO `enquiry`(`Company`, `ContactPerson`, `EmailAddress`, `ContactNumber`, `CandidateId`,`IsActive`)
                                    VALUES ('$Company','$ContactPerson','$EmailAddress','$ContactNumber','$CandidateId','$IsActive')";
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
