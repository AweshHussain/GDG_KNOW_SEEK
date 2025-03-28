<?php

$host= "localhost";
$username= "root";
$password= "AH_Since_2006@";
$db= "userdb"
$conn = mysqli_connect($host, $username, $password, $db);
if(!$conn)
{
    echo"connected";
}
else {
    echo"not connected";
}

?>