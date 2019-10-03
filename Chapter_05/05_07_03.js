var fs = require('fs');

fs.stat('data.txt',(err, stats)=>{
	if( err ){
		console.log( err );
		return;
	}
	console.log( stats );
});

fs.stat('Chapter_05',(err, stats)=>{
	if( err ){
		console.log( err );
		return;
	}
	console.log( stats ); 
});
