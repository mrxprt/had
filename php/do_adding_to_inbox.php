
<?php


function add_to_total($new_sum,$new_date,$type,$sql,$conn){
$id=0;
if($type =='EGY'){
$id=1;
}else {
$id=2;
}
   $sql =  "Select sum from total where id=$id";
   $result = mysql_query($sql,$conn) or die (mysql_error());
   $numrows = mysql_num_rows($result );
   echo "<p><--------Num Rows---------></p>";
   echo $numrows;
   echo "<p><--------Value of Sum---------></p>";
   $row = mysql_fetch_array($result); 
   echo "Old Total = ".$row['sum'];
   
   if($new_sum){
   $newTotal=$row['sum']+$new_sum;
    $sql =  "UPDATE total set sum=$newTotal  where id=$id";
	$result = mysql_query($sql,$conn) or die (mysql_error());
}

	if($new_date)
	{
	$sql =  "UPDATE total set date='$new_date'  where id=$id";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	}
	
	echo "<p>New Total = ".$newTotal."</p>"	;
   echo "<----------------->";
	
}


include('my_config.php');

if ( $_POST["sum"]== NULL)

{
echo "<script>alert('Error');</script>";
		echo "<script>location.href('/?page_id=10');</script>";

}
else
{
	$sum= $_POST['sum'];
  $from=  $_POST['from'];
  $notes=$_POST['notes'];
  $date=$_POST['date'];
  $type=$_POST['type'];
  
  
  echo $sum .'  ';
  echo $from."  ";
  echo $notes."  ";
  echo $date."  ";
  echo "<p>Type Start</p>";
  echo $type." ";
  
  echo "<p>Type End</p>";
   $conn = mysql_connect($host,$user,$pass);

   $db = mysql_select_db ($db , $conn );

   $sql =  "INSERT INTO inbox (sum,type,source,notes,date) VALUES ($sum,'$type','$from','$notes','$date')";


$result = mysql_query($sql,$conn) or die (mysql_error());
add_to_total($sum,$date,$type,$sql,$conn);


echo "<script>alert(' done ');</script>";
		echo "<script>location.href('3ohda.php');</script>";
}


?>