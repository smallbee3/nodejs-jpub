const http = require('http');

var SessionStr = ()=>{
	var str = "";
	var base_str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for( var i = 0 ; i < 64 ; i++ ){
		str += base_str[ Math.floor( Math.random()*base_str.length ) ];
	}
	return str;
}

var session_cookie_list = [];
const server = http.createServer((req, res) => {
	var session_cookie;

	console.log(1, req.headers.cookie)

	if( req.headers.cookie ){
		var cookies = req.headers.cookie.split(";").map((obj)=>{
			var temp = obj.trim().split("=");
			if( temp[ 0 ] == 'sessions' ){
				session_cookie = temp[ 1 ];
			}
			return obj.trim().split("=");
		});
	}

	console.log(2, cookies)

	var expire_time = new Date().getTime()+1000*86400;
	if( !session_cookie || !session_cookie_list[ session_cookie ] ){
		session_cookie = SessionStr();
		session_cookie_list[ session_cookie ] = {
			session_data: {},
			expire: expire_time
		};

		res.setHeader('Set-Cookie', 'sessions='+session_cookie+'; Expires='+new Date( expire_time ).toUTCString()+"; HttpOnly;");
	}else{
		session_cookie_list[ session_cookie ].expire = expire_time;
		res.setHeader('Set-Cookie', 'sessions='+session_cookie+'; Expires='+new Date( expire_time ).toUTCString()+"; HttpOnly;");
	}

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	// console.log('hi1')

	// myway
	res.write('sessions='+session_cookie+'; Expires='+new Date(new Date().getTime()+1000*86400).toUTCString()+"; HttpOnly;",
	'cookie=test2; Expires='+new Date(new Date().getTime()+1000*86400).toUTCString()+";")

	// console.log('hi2')

	res.end('Hello World 2\n');
});

server.listen(8800, (err) => {
	if( err ){
		console.log( err );
	}
	console.log(`Server running`);
});
