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

module.exports.evenDoubler = evenDoubler;
module.exports.foo = "bar"; 