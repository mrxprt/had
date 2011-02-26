
<?php


function add_to_total($new_sum,$new_date,$type,$sql,$conn){
$id=0;
if($type =='EGY'){
$id=1;
}else {
$id=2;
}
	$sql =  "Select * from inbox order by ID DESC limit 1 ";
   $result = mysql_query($sql,$conn) or die (mysql_error());
   $row = mysql_fetch_array($result); 
   $process_id=$row['id'];
   echo "<p>Process id start</p>";
   echo $process_id;
   echo "<p>Process id end</p>";
   
   $sql =  "Select sum from total where id=$id";
   $result = mysql_query($sql,$conn) or die (mysql_error());
   $numrows = mysql_num_rows($result );
   echo "<p><--------Num Rows---------></p>";
   echo $numrows;
   echo "<p><--------Value of Sum---------></p>";
   $row = mysql_fetch_array($result); 
   $old_total=$row['sum'];
   echo "Old Total = ".$old_total;
   
   if($new_sum){
   $newTotal=$row['sum']+$new_sum;
    $sql =  "UPDATE total set sum=$newTotal  where id=$id";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	$process_type="وارد";
	$sql =  "INSERT INTO total_log (type_process,id_of_process,sum,old_sum,new_sum,type,date) VALUES
	('$process_type','$process_id',$new_sum,$old_total,$newTotal,'$type','$new_date')";
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
function remove_from_total($new_sum,$new_date,$type,$sql,$conn){

$id=0;
if($type =='EGY'){
$id=1;
}else {
$id=2;
}

$sql =  "Select * from outbox order by ID DESC limit 1 ";
   $result = mysql_query($sql,$conn) or die (mysql_error());
   $row = mysql_fetch_array($result); 
   $process_id=$row['id'];
   echo "<p>Process id start</p>";
   echo $process_id;
   echo "<p>Process id end</p>";

   $sql =  "Select sum from total where id=$id";
   $result = mysql_query($sql,$conn) or die (mysql_error());
   $numrows = mysql_num_rows($result );
   echo "<p><--------Num Rows---------></p>";
   echo $numrows;
   echo "<p><--------Value of Sum---------></p>";
   $row = mysql_fetch_array($result); 
   $old_total=$row['sum'];
   echo "Old Total = ".$old_total;
   
   if($new_sum){
   $newTotal=$row['sum']-$new_sum;
    $sql =  "UPDATE total set sum=$newTotal  where id=$id";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	
	$process_type="صادر";
	$sql =  "INSERT INTO total_log (type_process,id_of_process,sum,old_sum,new_sum,type,date) VALUES
	('$process_type','$process_id',$new_sum,$old_total,$newTotal,'$type','$new_date')";
	
	$result = mysql_query($sql,$conn) or die (mysql_error());
}

	if($new_date!=null)
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
	$type_of_process= $_POST['type_of_process'];
  $from=  $_POST['from'];
  $notes=$_POST['notes'];
  $date=$_POST['date'];
  $type=$_POST['type'];
  
  
  
  echo $sum .'  ';
  echo "<p>Type Of Process</p>";
  echo $type_of_process .'  ';
  echo "<p>Type Of Process</p>";
  echo $from."  ";
  echo $notes."  ";
  echo $date."  ";
  echo "<p>Type Start</p>";
  echo $type." ";
  
  echo "<p>Type End</p>";
   $conn = mysql_connect($host,$user,$pass);

   $db = mysql_select_db ($db , $conn );
   
   if($type_of_process=="in"){
echo "<p> In Man< /p>";
    $sql =  "INSERT INTO inbox (sum,type,source,notes,date) VALUES ($sum,'$type','$from','$notes','$date')";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	add_to_total($sum,$date,$type,$sql,$conn);
}else {
echo "<p> out Man< /p>";
   $sql =  "INSERT INTO outbox (sum,type,source,notes,date) VALUES ($sum,'$type','$from','$notes','$date')";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	remove_from_total($sum,$date,$type,$sql,$conn);
}
echo "<script>alert(' done ');</script>";
echo "<script language='javascript'>window.location.href='http://mrxprt.com/homemanag/?page_id=24';</script>";
}


?>