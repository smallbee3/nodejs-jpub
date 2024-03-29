const cluster = require('cluster');
cluster.setupMaster({
	exec: './Chapter_07/worker2.js',
});

var worker = cluster.fork();
worker.on('message',(msg)=>{
	console.log(msg);
}).on('error',()=>{
	console.log("ERROR");
}).on('exit',(code, signal)=>{
	if (signal) {
		console.log(`worker was killed by signal: ${signal}`);
	} else if (code !== 0) {
		console.log(`worker exited with error code: ${code}`);
	} else {
		console.log('worker success!');
	}
});
