Object.prototype.alert = function (msg) {
    console.log(msg);
};
//"use strict"

// antipattern
// for demo purposes only
var add = new Function('a, b', 'return a + b');
//console.log(add(1, 2)); // returns 3

// Create a variable called add and store a function
// in it that adds two numbers.

var add = function (a, b) {
    return a + b;
};
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment( );
//console.log(myObject.value);
myObject.increment( );
//console.log(myObject.value);
myObject.increment(2);
///console.log(myObject.value);
myObject.double = function (  ) {
    var that = this;    // Workaround.

    var helper = function (  ) {
        that.value = add(that.value, that.value);
    };

    helper(  );    // Invoke helper as a function.
};

// Invoke double as a method.

myObject.double(  );
//console.log(myObject.value);     // 6

var addGlobal = function (a) {
    this.b = typeof b === 'number' ? b : 0;
    return a + b;
};
//console.log(b); Reference Error
//console.log(addGlobal(3));
//console.log(b);

var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function (  ) {
    return this.status;
};

// Make an instance of Quo.

var myQuo = new Quo("confused");

//console.log(myQuo.get_status(  ));  // confused



var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7
//console.log(sum);
// Make an object with a status member.

var statusObject = {
    status: 'A-OK'
};

var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
//console.log(status);