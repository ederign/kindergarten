var mathfun = require('./mathfun')

var handleResults = function(err, results, time){
	if(err){
        console.log("ERROR:" + err.message)
    }else{
        console.log("The results are " + results + " ("+time+" ms)");
    }
};

for (var i = 1; i < 11; i++) {
    mathfun.evenDoubler(i, handleResults);
};

console.log("===================================");
console.log("foo " + mathfun.foo)
console.log("undefined (not exported) " + mathfun.maxTime)