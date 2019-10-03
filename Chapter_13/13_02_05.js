var main = ()=>{
	for( var i = 0 ; i < 10 ; i++ ){
		Crawling(i);
	}
};

var Crawling = (i)=>{
	setTimeout(()=>{
		console.log("Get Page " + i);
		GetPage(i);
	},1000);
};

var page = 0;
var GetPage = (i)=>{
	console.log("Page Process: %d - %d",page, i);
	page++;
	if( page == 10 ){
		console.log("Process Ended");
	}	
};

main();
