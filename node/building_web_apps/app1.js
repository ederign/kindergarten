var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.urlencoded());

function authUser(request, response, next){
	var user = {
		name: 'Eder',
		admin:true
	};

	request.user = user;
	next();
}

// app.use(authUser);


app.get('/', function(request, response){
	console.log(request.user);
	response.send({
		foo:'bar'
	});
});

app.post('/doStuff',authUser, function(request, response){
	var param = request.body.foo;
	//console.log(request.param('foo'));
	response.send({
		foo:param,
		user:request.user.name,
		isAdmin:request.user.admin
	})
});

app.listen(3000);

