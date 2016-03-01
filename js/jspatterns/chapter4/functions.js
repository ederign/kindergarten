Object.prototype.alert = function (msg) {
    console.log(msg);
};
//"use strict"

// antipattern
// for demo purposes only
var add = new Function('a, b', 'return a + b');
console.log(add(1, 2)); // returns 3