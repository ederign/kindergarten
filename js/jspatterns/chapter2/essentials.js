myglobal = "hello";

Object.prototype.alert = function (msg) {
    console.log(msg);
};

function sum(x, y) {
    // antipattern: implied global
    //var result = x + y;
    result = x + y;
    return result;
}
//console.log(sum(1, 2));
//console.log(result);

// antipattern, do not use
function foo() {
    var a = b = 0;

    // ...
}
foo();
//console.log(b);

// define three globals
var global_var = 1;
global_novar = 2; // antipattern
(function () {
    global_fromfunc = 3; // antipattern
}());

// attempt to delete
delete global_var; // false
delete global_novar; // true
delete global_fromfunc; // true

// test the deletion
typeof global_var; // "number"
typeof global_novar; // "undefined"
typeof global_fromfunc; // "undefined"


//The single var pattern looks like this:

function func() {
    var a = 1,
        b = 2,
        sum = a + b,
        myobject = {},
        i,
        j;

    // function body...

}

// antipattern
myname = "global"; // global variable
function func() {
    console.log(myname); // "undefined"
    var myname = "local";
    console.log(myname); // "local"
}
//func();

var myarray = ["1", "2", 3];
// sub-optimal loop
for (var i = 0; i < myarray.length; i++) {
    // do something with myarray[i]
    //console.log(myarray[i]);
}

for (var i = 0, max = myarray.length; i < max; i = i + 1) {
    //console.log(myarray[i]);
}


// the object
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// somewhere else in the code
// a method was added to all objects
if (typeof  Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () {
    };
}

// 1.
// for-in loop
for (var i in man) {
    if (man.hasOwnProperty(i)) { // filter
        //console.log(i, ":", man[i]);
    }
}
// 2.
// antipattern:
// for-in loop without checking hasOwnProperty()
for (var i in man) {
    //console.log(i, ":", man[i]);
}
/*
 result in the console
 hands : 2
 legs : 2
 heads : 1
 clone: function()
 */
for (var i in man) {
    if (Object.prototype.hasOwnProperty.call(man, i)) { // filter
        //console.log(i, ":", man[i]);
    }
}

var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
    if (hasOwn.call(man, i)) { // filter
        //console.log(i, ":", man[i]);
    }
}

if (typeof Object.prototype.dorinha !== "function") {
    Object.prototype.dorinha = function () {
        console.log("au au ")
    };
}
//man.dorinha();

var zero = 0;
if (zero === false) {
    // not executing because zero is 0, not false
}

// antipattern
if (zero == false) {
    // this block is executed...
}



// antipattern
var obj = { name: "x"};
var property = "name";
//alert(eval("obj." + property));

// preferred
var property = "name";
//alert(obj[property]);

var myFunc = function(){
    //console.log("myFunc")
}
 //antipatterns
//setTimeout("myFunc()", 1000);
//setTimeout("myFunc(1, 2, 3)", 1000);
//
// preferred
//setTimeout(myFunc, 1000);
//setTimeout(function () {
//    myFunc(1, 2, 3);
//}, 1000);

(function () {
    var local = 1;
    //eval("local = 3; console.log(local)"); // logs 3
    //console.log(local); // logs 3
}());


(function () {
    var local = 1;
    //Function("console.log(typeof local);")(); // logs undefined
}());

var month = "06",
    year = "09";
//console.log(parseInt(month));
//console.log(parseInt(month,10));

var myFunc = function(){};
//myFunc.prototype.dorinha();
