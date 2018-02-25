<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";

$data = json_decode(file_get_contents("php://input"));
$rows = array();
$Id = $data->Id;
 $sql = "
       SELECT * FROM applications a
      inner join vacancies v on a.jobId = v.Id
      where a.status = 'Active' AND v.IsActive = '1' AND v.Id= '$Id';
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
