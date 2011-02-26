/*var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var time;
if(hours>12){
	hours=hours-12;
	time = hours +' : ' +  minutes + ' PM ';
}else {
		time = hours +' : ' +  minutes + ' AM ';
}
var date=time+" - "+month + "/" + day + "/" + year;
//document.write(date);
//var html=['<li> Date : '+date+ '</li>'];

 //var tweetEl = document.getElementById('favo'); 
 //   tweetEl.innerHTML = html.join('');
	
var db; 
if (window.openDatabase) {

//	html.push('DB is working in this Browser');
 db = openDatabase('Hadeth', '1.0', 'My first database', 2 * 1024 * 1024);
// alert('Db is supported');
 db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE favo (id  INTEGER PRIMARY KEY, event, favo,date)');
	//tx.executeSql('DROP  TABLE favo');
	
  }); 

 
}
/*
db.transaction(function (tx) {

    tx.executeSql('INSERT INTO favo (event, favo,date) VALUES (?, ?, ?)', [1,1,date]);
	    tx.executeSql('	select * from favo',[],function (tx,results){

				len=results.rows.length;
				//html.push('<li> Lenth :	  '+len +'</i>');
				for(var i=0;i<len;i++){
					var row=results.rows.item(i);
					
					//html.push('<li>'+row['tweet'] +'</i>');	
					
				}//tweetEl.innerHTML=html.join('');	
		}

		
		);

  });*/
