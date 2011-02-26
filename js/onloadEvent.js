// JavaScript Document

var header='افتتاح المعرض';
document.title = header;

var htmll=[];
var buttonName='add';

var favoStatus=0;


/*
function onload() {
	//htmll.push('Loaded');
	//Event_Description.innerHTML = htmll.join('');
	
	 if( readCookie('myCook')>favoStatus){
		 oFormObject = document.forms['favoForm'];
		oFormObject.elements["favo"].value ="حذف من المفضلة";
	 }else {
		oFormObject = document.forms['favoForm'];
		oFormObject.elements["favo"].value ="أضف إلى المفضلة"; 
	 }
     
}*/

function getTitle() {
    document.getElementById("headerTitle").innerHTML= header;   
}
function createCookie(name,value,days) {
	
	if (days) {
		
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
//document.write( name+"="+value+expires+"; path=/");

}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) {
				//document.write( "<br> Cooke = "+c.substring(nameEQ.length,c.length));
				//Event_Description.innerHTML = htmll.join('');
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}


function AddtoFavo(){
	 if(readCookie('myCook')>favoStatus){

 db.transaction(function (tx) {oFormObject = document.forms['favoForm'];
oFormObject.elements["favo"].value ="أضف إلى المفضلة";
favoStatus=0;
createCookie('myCook','0',100);
	     tx.executeSql('DELETE FROM favo');
		 	timedRefresh(0);
 });
	 }else {
		 
		 if (window.openDatabase) {
 
 db.transaction(function (tx) {
	     tx.executeSql('DELETE FROM favo');

    tx.executeSql('select * from favo',[],function (tx,results){
		len=	results.rows.length;
		if(len<1){
		//htmll.push('<br>len :'+len+' <br>Even ID = '+Event_ID+'<br>');
		//Event_Description.innerHTML = htmll.join('');
tx.executeSql('INSERT INTO favo (event, favo,date) VALUES (?, ?, ?)', [1,Event_ID,date]);	
oFormObject = document.forms['favoForm'];
oFormObject.elements["favo"].value ="حذف من المفضلة";

createCookie('myCook','1',100);
console.log('Doone');
timedRefresh(0);
//alert('تمت الإضافة بنجاح');			
			}

 		for(i=0;i<len;i++){
		 
			var row=results.rows.item(i);
			
			if(row['event']==Event_ID ){
				htmll.push('TRUE : row[event] : '+row['event']);
				Event_Description.innerHTML = htmll.join('');
				alert('تم إضافته من قبل');	
				
			}else{
				//htmll.push('Else : row[event] : '+row['event']);
			//	Event_Description.innerHTML = htmll.join('');
				tx.executeSql('INSERT INTO favo (event, favo,date) VALUES (?, ?, ?)', [1,Event_ID,date]);	
				
				alert('تمت الإضافة بنجاح');	
			
					}
		}
   

	});

  }); 
 }else{
	 alert("هذة الخاصية غير مدعومة في الجهاز");
 }
		 
	 }
}

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}