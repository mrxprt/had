<?php
$username = $_GET['u'];
$passeord = $_GET['p'];

if($username=='yahia' && $passeord=='password' ){
	
	echo('<script>window.location = "agenda.html"</script>');
}else{
	echo('<script>alert("error")</script>');
	echo('<script>window.location = "signup.html"</script>');
}

?>


