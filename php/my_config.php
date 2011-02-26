<?php
$host='localhost';
$user='mrxprt_hadath';
$pass='xDM*7w0p{8ww';
$db='mrxprt_hadath';


$conn = mysql_connect($host,$user,$pass);
$db = mysql_select_db ($db , $conn );


function checkSB($sql,$conn,$u,$p){
$sql =  "select * from users";
$result = mysql_query($sql,$conn) or die (mysql_error());
$numrows = mysql_num_rows($result );
$userStatus;
for($i=0;$i<$numrows ;$i++){
$row = mysql_fetch_array($result);
//echo('$i : '.$i.'<br>');
if($row['mail']==$u){
	$userStatus=2;
	//echo('$userStatus : '.$userStatus.'<br>');
	if($row['pass']==$p){
			//echo('$userStatus : '.$userStatus.'<br>');
	$userStatus=3;
		break;
	}
	break;
	
 }else {
	$userStatus=1;	 
		//echo('$userStatus : '.$userStatus.'<br>');
		break;
 }
 	
}




switch($userStatus){
case 1:
return false;
break;
	
case 2:
return false;
break;	

case 3:
return true;;
break;	
}
}


function insertInEvent($sql,$conn,$u,$e){
$sql =  "select * from users where mail='".$u."'";
$result = mysql_query($sql,$conn) or die (mysql_error());
$row = mysql_fetch_array($result);
$events=$row['events'];
$Status=true;
$eventsA=split(',',$events);
//echo('count($eventsA) : '.count($eventsA).'<br>');
for($i=0;$i<count($eventsA);$i++){
	if($eventsA[$i]==$e){
		$Status=false;
		//echo($eventsA[$i].' : is exist');	
		break;
	}
			//echo('$eventsA[i] : '.$eventsA[$i].'<br>');	
}
if($Status){
$events=$events.','.$e;

$sql ="UPDATE users SET events = '".$events."' WHERE mail = '".$u."' ";
$result = mysql_query($sql,$conn) or die (mysql_error());
//echo('Added');	
}else{
//echo('exist');	
}

}



function removeFromEvent($sql,$conn,$u,$e){
$sql =  "select * from users where mail='".$u."'";
$result = mysql_query($sql,$conn) or die (mysql_error());
$row = mysql_fetch_array($result);
$events=$row['events'];
 
$eventsA=split(',',$events);
echo('count($eventsA) : '.count($eventsA).'<br>');
$i=0;
for($i=0;$i<count($eventsA);$i++){
	echo('$eventsA[$i] : '.$eventsA[$i].'<br>');
	 	if($eventsA[$i]==$e){
				echo('Break<br>');
			break;
		}
}
$events='';
$eventsA[$i]=' ';
//echo('$eventsA['.$i.'] : '.$eventsA[$i].'<br>');

for($i=0;$i<count($eventsA);$i++){
		//echo('$events : '.$events.'<br>');
	 	if($eventsA[$i]!=' '){
			$events=$events.','.$eventsA[$i];

		}
}



$sql ="UPDATE users SET events = '".$events."' WHERE mail = '".$u."' ";
$result = mysql_query($sql,$conn) or die (mysql_error());
//echo('deleted');	
} 


function ckeckExistance($sql,$conn,$u){
	$sql =  "select * from users ";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	$row = mysql_fetch_array($result);
	$numrows = mysql_num_rows($result );
	//echo('$numrows : '.$numrows.'<br>');
	$Status;
	$i=0;
	for($i=0;$i<$numrows;$i++){
			if($row['mail']==$u){
				$Status='true';
				break;
			}
			$Status='false';
	}
	return ($Status);
}

function addToUsers($sql,$conn,$m,$p){
	$sql = "INSERT INTO users (mail, pass)VALUES ('".$m."', '".$p."')";
	$result = mysql_query($sql,$conn) or die (mysql_error());
	
}
?>