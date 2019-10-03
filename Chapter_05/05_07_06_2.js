var fs = require('fs');


// 디렉토리내의 파일 목록을 읽어옵니다.
fs.readdir('tempdir',( err , files )=>{
	if( err ){
		throw err;
	}
	// 파일목록을 출력합니다.
	console.log( files );

	if( files != []) {
		for (a of files) {
			fs.unlink('tempdir/' + a, ()=>{
				console.log( a, ' file unlinked!' );
			});
		}
	}

	// 디렉토리내의 파일 목록을 읽어옵니다.
	fs.rmdir('tempdir',( err , files )=>{
		if( err ){
			throw err;
		}

		// 생성후에는 메시지를 화면에 출력합니다.
		console.log( err );
	});
});
