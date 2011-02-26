<?php
$username = $_GET['u'];
$passeord = $_GET['p'];
$lang = $_GET['l'];
$event = $_GET['e'];


include('my_config.php');
/*
echo('User : '.$username.'<br>');
echo('Password : '.$passeord.'<br>');
echo('Language : '.$lang.'<br>');
echo('Event : '.$event.'<br>');
*/
if($lang=='ar'){
$erro_msg_ar="عفواً بياناتك غير صحيحة";
$msg_ar="تم حذف الحدث";
}else {
$erro_msg_en="Sorry , your data is incorrect";
$msg_en="ُEvent deleted succesfully";
}
 
 
if(checkSB($sql,$conn,$username,$passeord)){
	

// 	 echo('1');
	 echo('<script>alert("'.$msg_ar.'")</script>');
	 removeFromEvent($sql,$conn,$username,$event);
	 /*echo('<script>javascript:history.back(-1);</script>');*/
	echo('<script>window.location = "http://localhost/hadath/event.html?'.$lang.','.$event.',2"</script>');
}else{
	if($lang=='ar'){
	echo('<script>alert("'.$erro_msg_ar.'")</script>');
	echo('<script>window.location = "signin.html?ar"</script>');
    }else {
	echo('<script>alert("'.$msg_en.'")</script>');
	echo('<script>window.location = "signin.html?en"</script>');
    
    }
}

?>


