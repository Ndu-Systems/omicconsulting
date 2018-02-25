<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
if (isset($data->sendTo) ){
    $msg    = $data->msg   ;
    $title  = $data->title ;
    $sendTo = $data->sendTo;
    $headers   = $data->headers   ;

    mail($sendTo,$title,$msg,$headers);
	echo 1;
}

?>
