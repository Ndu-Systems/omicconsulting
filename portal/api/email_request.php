<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){

    $email = $data->email;
    $name = $data->name;
    $surname = $data->surname;
    $subject =$data->subject;
    $from = $data->from;
    $to = $email;

    $message = "
            <div>
            <p><span style="text-decoration: underline;">Access Request</span></p>
            <p><strong>Dear&nbsp;</strong>Admin</p>
            <p>Please Grant Access for the following User</p>
            <p>UserName: $name.$surname</p>
            <p>Email: $from</p>
            <p>Role : Agent</p>
            <br/>       
            <p>Regards</p>
            <p>Makhawini.portal</p>

            </div>
        ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= "From:". $from . "\r\n";
    $headers .= 'Cc: mrnnmthembu@gmail.com' . "\r\n";

    mail($to,$subject,$message,$headers);
    echo 1;
}

else {

	echo json_encode("oops something went wrong");
}

?>


