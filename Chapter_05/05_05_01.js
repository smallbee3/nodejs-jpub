var http = require('http');

http.get('http://202.30.241.150:8000/cpsmsstat/smssv/auth/login.jsp',(res)=>{
	var body = '';
	res.on('data',(d)=>{
		body += d;
	});
	res.on('end',()=>{
		console.log( "DATA: " , body );
	});
}).on('error',(e)=>{
	console.log( "Error:",e );
});
