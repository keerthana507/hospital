<?php
 $name=$_POST['name'];
 $age=$_POST['age'];
 $gender=$_POST['gender'];
 //database connection 
 $conn=new mysqli('localhost','root','','customer');
 if($conn->connect_error){
    die('connection Failed:'.$conn->connect_error);
 }
 else{
    $stmt=$conn->prepare("insert into reg(name,age,gender)
    values(?,?,?)");
    $stmt->bind_param("sssssi",$name,$age,$gender);
    $stmt->execute();
    echo "registration succcessfully...";
    $stmt->close();
    $conn->close();
 }
?>