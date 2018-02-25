<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){
    $email = $data->email;
    $cell = $data->cell;
    $body = $data->body;
    $name = $data->name;
    $subject =$data->subject;
    $from = $data->from;
    $to = $email ;

    $message = "
<div>
<p>
Dear $name
<br><br>
$body
<br>

</p>

<p>
Regards <br>
Sebenza Team. <br>

</p>

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


