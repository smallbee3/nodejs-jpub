let num = 1;

setInterval(()=>{
	process.send('worker call ' + num);
	num += 1;
},1000);

setTimeout(()=>{
	error_function();
},5000);
