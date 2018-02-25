<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
require "conn.php";

$rows = array();
$sql = "SELECT * FROM vacancies where IsActive = 1";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$rows["vacancies"][]= $row;
	}
}
echo json_encode($rows);
$conn->close();


?>
