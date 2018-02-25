var extention = ".php";
var host = "http://localhost/git.omic/portal/api/";
//var host = "http://ndu-systems.net/demo/makhawini/api/";

function GetApiUrl(serviceName) {

    var url = host + serviceName + extention;
    return url;
}
function GetHost(data) {
    return host + "" + data;
}
function getDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}
// email tempates

function WelcomeMessage() {
    var msg = "";
    return "";
}
function Confirm(heading, msg, callback) {

    $("#popup-heading").text(heading);
    $("#popup-paragraph").text(msg);
    $(".overlay").show();
    $(".popup").fadeIn("slow");

    $("#no").click(function () {
        $(".overlay").hide();
        $(".popup").hide();
        callback(false)
    });
    $("#yes").click(function () {
        $(".overlay").hide();
        $(".popup").hide();
        callback(true)
    });

}

function Load(){
	  $(".overlay").show();
	   $(".load").show();
}
function Done(){
	  $(".overlay").hide();
	   $(".load").hide();
}
