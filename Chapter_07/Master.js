const cluster = require('cluster');
cluster.setupMaster({
	exec: './Chapter_07/worker.js',
});

var worker = cluster.fork();
worker.on('message',(msg)=>{
	console.log(msg);
});
