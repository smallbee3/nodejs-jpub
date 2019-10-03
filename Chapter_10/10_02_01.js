const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	if( req.url == '/' ){
		fs.readFile('Chapter_10/10_02_02.html', 'utf8', (err, data)=>{
			if( err ){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/plain');
				res.end('File Not Found\n');
			}else{
				console.log(1, req.url );

				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				res.end( data );

				console.log(11, data );
			}
		});
	}else if( req.url == '/longpolling' ){
		console.log(2, req.url );

		HttpConnection.push([ req, res ]);
	}else{
		console.log(3, req.url );

		setTimeout(()=>{
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Hello World\n');
		},1000);
	}
});

server.listen(8800, (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});

var HttpConnection = [];

setInterval(()=>{
	console.log(0, HttpConnection.length );
	if( HttpConnection.length > 0 ){
		console.log(0, 'hi1' );
		var Connection = HttpConnection.pop();
		var res = Connection[ 1 ];
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('End2222\n');	// 이 부분에서 10_02_02.html로 data 전송
	}
},3*1000);
