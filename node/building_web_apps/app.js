// var http = require('http');

// http.createServer(function(request, response){
// 	response.writeHead({
// 		'Content-Type':'text/plain'
// 	});
// 	response.end('hello world yo');
// }).listen(3000);


// var logger = require('./logger');

// logger.info('hello world');


// var Point = require('./Point');

// var pt = new Point(1,2);

// pt.print();

var twilio= require('twilio');

var client = twilio();

client.sendMessage({
	to:'+55981797575',
	from: 'bla'
})