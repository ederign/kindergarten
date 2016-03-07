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


// Make a function that adds a lot of stuff.

// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function (  ) {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

//console.log(sum(4, 8, 15, 16, 23, 42)); // 108

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}

//add(1,"2a");

var try_it = function (  ) {
    try {
        add("seven");
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
}

//try_it(  );

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function (  ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

//console.log((-10 / 3).integer(  ));


function foo() {console.log("foo");}

//foo();


// antipattern
// for illustration only

// global functions
function foo() {
    alert('global foo');
}
function bar() {
    alert('global bar');
}

function hoistMe() {
    console.log(typeof foo); // "function"
    console.log(typeof bar); // "undefined"

    foo(); // "local foo"
    bar(); // TypeError: bar is not a function

    // function declaration:
    // variable 'foo' and its implementation both get hoisted
    function foo() {
        alert('local foo');
    }

    // function expression:
    // only variable 'bar' gets hoisted
    // not the implementation
    var bar = function () {
        alert('local bar');
    };
}
//hoistMe();

var setup = function () {
    alert(1);
    return function () {
        alert(2);
    };
};

// using the setup function
//var my = setup(); // alerts 1
//my(); // alerts 2

var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    };
};

// usage
var next = setup();
next(); // returns 1
next(); // 2
//console.log(next()); // 3


var scareMe = function () {
    alert("Boo!");
    scareMe = function () {
        alert("Double boo!");
    };
};

// using the self-defining function
//scareMe(); // Boo!
//scareMe(); // Double boo!

//(function () {
//    alert('watch out!');
//}());

(function () {

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();

    //alert(msg);

}()); // "Today is Fri, 13"

var getResult = (function () {
    var res = 2 + 2;
    return function () {
        return res;
    };
}());

//console.log(getResult());

var o = {
    message: (function () {
        var who = "me",
            what = "call";
        return what + " " + who;
    }()),
    getMsg: function () {
        return this.message;
    }
};
// usage
//console.log(o.getMsg()); // "call me"
//console.log(o.message);  // "call me"

({
    // here you can define setting values
    // a.k.a. configuration constants
    max_width: 600,
    max_height: 400,

    // you can also define utility methods
    gimmeMax: function () {
        return this.max_width + "x" + this.max_height;
    },

    // initialize
    init: function () {
        console.log(this.gimmeMax());
        // more init tasks...
    }
}).init();