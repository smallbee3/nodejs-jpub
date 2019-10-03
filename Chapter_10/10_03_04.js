var SockServer = require('socket.io');
var io = new SockServer();

var SockList = {};

var chat = io
.of('/chat')
.on('connection', (socket)=>{
	SockList[ socket.id ] = null;

	console.log(1, "서버에 접속되었습니다."+new Date())
	socket.emit("msg","서버에 접속되었습니다."+new Date());

	for( var sock_id in SockList ){
		console.log(2, sock_id)
		console.log(22, socket.id)
		if( sock_id != socket.id && SockList[ sock_id ] == null ){
			SockList[ sock_id ] = socket.id;
			SockList[ socket.id ] = sock_id;
			console.log(3, 'break')
			break;
		}
	}

	var opt_socket = SockList[ socket.id ];
	console.log(4, opt_socket)
	if( opt_socket ){
		console.log(44, opt_socket, "[상대방]이 서버에 접속하였습니다.")
		console.log(44, socket.id, "[ 상대방과 연결되었습니다. ]")
		chat.sockets[ opt_socket ].emit("msg","[상대방]이 서버에 접속하였습니다.");
		chat.sockets[ socket.id ].emit("msg","[ 상대방과 연결되었습니다. ]");
	}

	socket.on('msg',(data)=>{
		var opt_socket = SockList[ socket.id ];
		console.log(5, opt_socket)
		if( opt_socket ){
			console.log(55, data)
			chat.sockets[ opt_socket ].emit("msg","[상대방]"+data);
			chat.sockets[ socket.id ].emit("msg","[나]"+data);
		}
	})
	.on('disconnect',()=>{
		var opt_socket = SockList[ socket.id ];
		console.log(6, opt_socket)
		if( opt_socket ){
			console.log(66, opt_socket)
			chat.sockets[ opt_socket ].emit("msg","상대방이 접속을 종료했습니다.");
			SockList[ opt_socket ] = null;
		}
		delete SockList[ socket.id ];
	});
});

io.listen(3000);

setInterval(()=>{
	var count = 0;
	for( var sock_id in SockList ){
		count++;
	}
	console.log(7, "[ 전체 공지! ] 현재 접속자는 총 "+count+" 명입니다.")

	chat.emit("msg","[ 전체 공지! ] 현재 접속자는 총 "+count+" 명입니다.");
},1000*5);
