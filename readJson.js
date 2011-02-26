function readJSON(jsonLink,htmlID){
var jsondata1;
var result = document.getElementById(htmlID); 
var htmll1=[];
var mygetrequest= new XMLHttpRequest();

 	 	htmll1.push('<li>'+mygetrequest+'</li>');
	 	result.innerHTML = htmll1.join('');
		
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){

	   		htmll1.push("<li>readyState==4</li>");
	 	result.innerHTML = htmll1.join('');
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){

   		htmll1.push("<li>readyState==200</li>");
	 	result.innerHTML = htmll1.join('');
		  
  jsondata=eval(mygetrequest.responseText);
	
  htmll1.push('<li>'+ jsondata.length+'</li>');
    htmll1.push('<li>'+ mygetrequest.responseText+'</li>');
 jsondata1= mygetrequest.responseText;
	 	result.innerHTML = htmll1.join('');
		/*var t=jsondata[0].title;
		  htmll1.push('<li>'+t+'</li>');
	 	result.innerHTML = htmll1.join('');*/
		jsondata1=jsondata;
  
  }
  else{
   alert("An error has occured making the request");
  
  }

 }
};

mygetrequest.open("GET",jsonLink, true);

mygetrequest.send(null);
return  jsondata1;
   
}


var htmll1=[];
 		var tt;
function readFileHttp(fname,htmlID,callback ) {
		  var result = document.getElementById(htmlID); 
   xmlhttp = getXmlHttp();
   xmlhttp.onreadystatechange = function() {

      if (xmlhttp.readyState==4) { 

	  callback(xmlhttp.responseText,htmlID );/*
	  var result = document.getElementById(htmlID); 
		
		var tt=eval(xmlhttp.responseText);
		htmll1.push('<li>'+tt+'</li>');
	 	result.innerHTML = htmll1.join('');*/

      }
   }
   xmlhttp.open("GET", fname, true);
   xmlhttp.send(null);
   		
}
 

function getXmlHttp() {
   if (window.XMLHttpRequest) {
      xmlhttp=new XMLHttpRequest();
   } else if (window.ActiveXObject) {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
   if (xmlhttp == null) {
      alert("Your browser does not support XMLHTTP.");
   }
   return xmlhttp;
}

function openPhp(callBack,u,p,l){
	var mygetrequest= new XMLHttpRequest();

 	 
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){

	   		 
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
	callBack(mygetrequest.responseText);
  }
  else{
   alert("An error has occured making the request");
  
  }

 }
};

mygetrequest.open("GET",'http://localhost/hadath/signIn.php?u='+u+'&p='+p+'&l='+l, true);

mygetrequest.send(null);
}

