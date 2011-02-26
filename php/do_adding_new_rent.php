
<?php
include('my_config.php');
if ( $_POST["name_of_building"]== NULL)

{
echo "<script>alert('Error');</script>";
		echo "<script>location.href('insert_page.php');</script>";

}
else
{
	$name_of_building= $_POST['name_of_building'];
  $name_of_tenant=  $_POST['name_of_tenant'];
  $sum=$_POST['sum'];
  $start_at=$_POST['start_at'];
  $finish_at=$_POST['finish_at'];
  $duration_by_year=$_POST['duration_by_year'];
  $rate_of_increase=$_POST['rate_of_increase'];
  $date=$_POST['date'];
  
	echo "1-name_of_building :".$name_of_building;
  echo "2- name_of_tenant".$name_of_tenant;
 echo  "3- sum".$sum;
 echo  "4- start_at".$start_at;
 echo  "5- finish_at".$finish_at;
 echo  "6- duration_by_year".$duration_by_year;
echo   "7- rate_of_increase".$rate_of_increase;
 echo  "8-date".$date;
 
   $conn = mysql_connect($host,$user,$pass);

   $db = mysql_select_db ($db , $conn );

   $sql =  "INSERT INTO rents_details  (name_of_building,name_of_tenant,sum,start_at,finish_at,duration_by_year,rate_of_increase,date) 
   VALUES (
   '$name_of_building',
   '$name_of_tenant',
   $sum,
   '$start_at',
   '$finish_at',
   '$duration_by_year',
   '$rate_of_increase',
   '$date')";


$result = mysql_query($sql,$conn) or die (mysql_error());
echo "<script>alert(' done ');</script>";
		echo "<script>location.href('3ohda.php');</script>";
}


?>