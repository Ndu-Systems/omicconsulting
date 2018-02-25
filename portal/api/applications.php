<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";

$data = json_decode(file_get_contents("php://input"));
$rows = array();
 $sql = "
SELECT   applications.id,applications.name, applications.surname, applications.idnumber , applications.status , applications.email , applications.cv , applications.tel,
          vacancies.Location , vacancies.Position
          FROM applications
          inner JOIN vacancies ON applications.jobId = vacancies.id
          ORDER BY applications.id;
 ";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$rows["data"][]= $row;
	}
}

echo json_encode($rows);
$conn->close();


?>
