<?php

$serverName = "localhost";
$userName = "admin";
$password = "password";
$db = "dictionary";

// create connection
$conn = mysqli_connect($serverName, $userName, $password, $db);

//check connection
//if(!$conn){
//    die("connection fail: ". mysqli_connect_error()."<br>");
//} else {
//    echo "connected successfully"."<br>";
//}
?>