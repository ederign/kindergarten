var maxTime=1000;

var evenDoubler = function (v, callback){
    var waiTime = Math.floor(Math.random()*(maxTime+1));

    if(v%2){
        setTimeout(function(){
            callback(new Error("Odd input"));
        }, waiTime)
    }
    else{
        setTimeout(function(){
            callback(null, v*2, waiTime)
        }, waiTime)
    }

};


var handleResults = function(err, results, time){
	if(err){
        console.log("ERROR:" + err.message)
    }else{
        console.log("The results are " + results + " ("+time+" ms)");
    }
};

for (var i = 1; i < 11; i++) {
   evenDoubler(i, handleResults);
};

console.log("===================================");