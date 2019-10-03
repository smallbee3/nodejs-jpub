var SockServer = require('socket.io');
var io = new SockServer();

var chat = io
.of('/chat')
.on('connection', (socket)=>{
	console.log("connection", new Date() );

	socket.on('msg',(data)=>{
		console.log("RECV MSG : ", data);

		setTimeout(()=>{
			// socket.emit("msg", "Send from Server 1 " + new Date());
			chat.emit("msg", "Send from Server 2 " + new Date());	// -> 위 아래 두 줄이면 2의 배수로 계속 늘어남.
		},1000);
	})
	.on('disconnect',()=>{
		console.log("disconnect");
	});
});

io.listen(3000);
