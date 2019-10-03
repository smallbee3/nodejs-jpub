var http = require('http');

http.createServer( ( req , res )=>{
	res.writeHead( 200 , {'Content-Type':'text/plain'});
	
	// Code A
	// let send_str = 'Hello World\n'
	// send_str += 'Hello World2\n'
	// res.end(send_str);

	// Code B
	// res.write('Hello World\n');
	// res.write('Hello World2\n');
	// res.end();

	// Code setTimeout
	// res.write('Hello\n');
	// setTimeout(() => {
	// 	res.write('World\n');
	// 	res.end();
	// }, 1000)

	// // Code setTimeout
	res.write('Hello\n');
	setInterval(() => {
		res.write('World\n');
	}, 1000)
	

}).listen( 8800 ,()=>{
	console.log( "Server listen started", new Date() );
});

console.log( "Server running" , new Date() );
