const http = require('http');

// const port = 80;
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, (err) => {
// server.listen((err) => {
	if( err ){
		console.log( err );
	}
 console.log(`Server running`);
});
