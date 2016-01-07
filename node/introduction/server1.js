var fs = require('fs');

var http = require( 'http');

http.createServer( function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain'});

	if (req.url === '/file.txt'){
		fs.createReadStream(__dirname+ '/file.txt').pipe(res);
	} else{
		res.end('Hello World');
	}
}).listen(1337, '127.0.0.1');
console.log('Server Running');

