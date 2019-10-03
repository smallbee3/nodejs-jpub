let num = 1;

setInterval(()=>{
	process.send('worker call ' + num);
	num += 1;
},1000);

// (* Worker는 별도로 실행되지 않아도 Master에서 실행되므로 아래 코드는 잘못)

// const http = require('http');

// http.Server((req, res) => {
// 	setInterval(()=>{
// 		process.send('worker');
// 	},1000);
// }).listen(8800);
