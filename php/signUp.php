<?php
include('my_config.php');
$mail = $_GET['m'];
$passeord = $_GET['p'];
$lang = $_GET['l'];
/*
echo('$mail : '.$mail.'<br>');
echo('$passeord : '.$passeord.'<br>');
echo('$lang : '.$lang	.'<br>');
*/
if($lang=='ar'){
$erro_mail_msg="عفواً , الرجاء التأكد من البريد الإلكتروني";
$erro_exist_msg="عفواً , قمت بالتسجيل مسبقاً";
$msg="تمت عملية التسجيل بنجاح";
}else{
$erro_mail_msg="Sorry , this is not a valid E-Mail";
$erro_exist_msg="Sorry , you are alrady signed up";
$msg="Congrats , successful";
}



if(!filter_var($mail, FILTER_VALIDATE_EMAIL))
{
//echo("E-mail is not valid");
	 echo('<script>alert("'.$erro_mail_msg.'")</script>');
	 echo('<script>javascript:history.back();</script>');
}else {
	//$r=ckeckExistance($sql,$conn,$mail);
//echo('<br>'.$r.'<br>');
	if($r=='true'){
			 echo('<script>alert("'.$erro_exist_msg.'")</script>');
			 echo('<script>javascript:history.back();</script>');
	}else{
		addToUsers($sql,$conn,$mail,$passeord);
			echo('<br>else{<br>');	
		 echo('<script>alert("'.$msg.'")</script>');
		 echo('<script>window.location = "http://localhost/hadath/agenda.html"</script>');
	}

}


?>

