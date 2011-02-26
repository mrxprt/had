function getCats(callback){
var page=[
				{	
					"title":" جدول الأعمال",
					"IImage":"agenda",
					"page":"agenda.html",
					"ID":'1'
				
				},
		
				{	
					"title":"الحضور",
					"IImage":"attendees",
					"page":"attendees.html",
					"ID":2
				
				},
		
				{	
					"title":"المتحدثون",
					"IImage":"speakers",
					"page":"speakers.html",
					"ID":3
				
				},
		
				{	
					"title":"العارضون",
					"IImage":"exhibitors",
					"page":"exhibitors.html",
					"ID":4
				
				},
		
				{	
					"title":"Live Feeds",
					"IImage":"livefeeds",
					"page":"feedscats.html",
					"ID":5
				
				},
		
			
		
				{	
					"title":"خريطة الحدث",
					"IImage":"map",
					"page":"maps.html",
					"ID":7
				
				}
		
		
		];
		callback(page,'home');
}

function getEvents(callback){
var page=[
{	 				"Name":"المتحدثون الرئيسيون و المواضيع",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":1,
					"Description":"event detalis , ... ,event detalis , ... ,event detalis , ... ,event detalis , ... ,event detalis , ... ,"
				
				},
				{	 				"Name":"أوقات الافتتاح والاختتام",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":2,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"ورشة العمل و قاعات الاجتماعات",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":3,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض4",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":4,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض5",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":5,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض6",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":6,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض7",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":7,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
					
				
				},
				{	 				"Name":"افتتاح المعرض8",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":8,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض9",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":9,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				}
				
];
		callback(page,'home');
}

function getattendees(callback){
var page=[
{	 				"Name":"Ruediger Dorn",
					"Company":"Director",	
					"Position":"Developer",	
					"WebSite":"Applied Innovation Public Sector, Microsoft",
					"AboutME":"Director .. , Director .. , Director .. , Director .. , ",
					"Interest":"Director , Microsoft ",
					"IImage":"images/speakers/Ruedigerdorn.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":1
					
				},
				{	



					"Name":"Andrea Di Maio",
					"Company":"Vice President",	
					"Position":"Government and Public Sector, Gartner",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/AndreaDiMaio.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":2
					
				},{	 
				



					"Name":"Chris Bunio",
					"Company":"Public Sector Solution Lead",	
					"Position":"Microsoft",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/Chrisbunio.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":3
					
				},{	
				

 
					"Name":"Mohammed Al Ohali",
					"Company":"Deputy Minister",	
					"Position":"Ministry of Higher Education, Saudi Arabia",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/MohammedalOhali.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":4
					
				},{	 	
				
				



							"Name":"Shadi Abu-Zahra",
					"Company":"Activity Lead",	
					"Position":"Wal International Program Office (W3C)",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/Shadiabuzahra.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":5
					
				},{	 
				



				
								"Name":"Jeremy Millard",
					"Company":"Senior Consultant",	
					"Position":"Danish Technological Institute",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/JeremyMillard.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":6
					
				},{	 				"Name":"Yahia Ragae",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":7
					
				} 
				
				
];
		callback(page,'home');
}

function getspeakers(callback){
var page=[
{	 				"Name":"Ruediger Dorn",
					"Company":"Director",	
					"Position":"Developer",	
					"WebSite":"Applied Innovation Public Sector, Microsoft",
					"AboutME":"Director .. , Director .. , Director .. , Director .. , ",
					"Interest":"Director , Microsoft ",
					"IImage":"images/speakers/Ruedigerdorn.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":1
					
				},
				{	



					"Name":"Andrea Di Maio",
					"Company":"Vice President",	
					"Position":"Government and Public Sector, Gartner",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/AndreaDiMaio.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":2
					
				},{	 
				



					"Name":"Chris Bunio",
					"Company":"Public Sector Solution Lead",	
					"Position":"Microsoft",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/Chrisbunio.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":3
					
				},{	
				

 
					"Name":"Mohammed Al Ohali",
					"Company":"Deputy Minister",	
					"Position":"Ministry of Higher Education, Saudi Arabia",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/MohammedalOhali.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":4
					
				},{	 	
				
				



							"Name":"Shadi Abu-Zahra",
					"Company":"Activity Lead",	
					"Position":"Wal International Program Office (W3C)",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/Shadiabuzahra.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":5
					
				},{	 
				



				
								"Name":"Jeremy Millard",
					"Company":"Senior Consultant",	
					"Position":"Danish Technological Institute",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/speakers/JeremyMillard.png",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":6
					
				},{	 				"Name":"Yahia Ragae",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mobilesoft.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":7
					
				} 
				
				
];
		callback(page,'home');
}


function getexhibitors(callback){
var page=[
{	 				"CompnayName":"Mobile Soft1",
					"IImage":"images/logo.png",
					"AboutCompnay":" نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...<br>Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..",	
					"WebSite":"http://www.mobilesoft.com",
					"Phone":"009660000000",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mobilesoft",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":1
					
				}
];
		callback(page,'home');
}