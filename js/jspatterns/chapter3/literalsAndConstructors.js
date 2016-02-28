Object.prototype.alert = function (msg) {
    console.log(msg);
};
//"use strict"

var a = "a";
//console.log(typeof a);
var dog = {};
//console.log(typeof dog);
dog.name = "Dora";

dog.getName = function () {
    return dog.name;
};

//console.log(dog.getName());

//delete dog.name;

//console.log(dog.name);

var otherDog = {
    name: "Benji",
    getName: function () {
        return this.name;
    }
};

// one way -- using a literal
var car = {goes: "far"};

// another way -- using a built-in constructor
// warning: this is an antipattern
var car = new Object();
car.goes = "far";





// Warning: antipatterns ahead

// an empty object
var o = new Object();
//console.log(o.constructor === Object); // true

// a number object
var o = new Object(1);
//console.log(o.constructor === Number); // true
//console.log(o.toFixed(2)); // "1.00"


// a string object
var o = new Object("I am a string");
//console.log(o.constructor === String); // true
// normal objects don't have a substring()
// method but string objects do
//console.log(typeof o.substring); // "function"

// a boolean object
var o = new Object(true);
//console.log(o.constructor === Boolean); // true

//var Person = function (name) {
//    this.name = name;
//    this.say = function () {
//        return "I am " + this.name;
//    };
//};
var Person = function (name) {

    // create a new object
    // using the object literal
    // var this = {};

    // add properties and methods
    this.name = name;
    //this.say = function () {
    //    return "I am " + this.name;
    //};

    // return this;
};

Person.prototype.say = function () {
    return "I am " + this.name;
};
var adam = new Person("Adam");
//console.log(adam.say()); // "I am Adam"

// constructor
//function Waffle() {
//    this.utastes = "yummy";
//}

//function Waffle() {
//    var that = {};
//    that.tastes = "yummy";
//    return that;
//}


// a new object
//var good_morning = new Waffle();
//console.log(typeof good_morning); // "object"
//console.log(good_morning.tastes); // "yummy"

// antipattern:
// forgotten `new`
//var good_morning = Waffle();
//console.log(typeof good_morning); // "undefined"
//console.log(tastes); // "yummy"

function Waffle() {
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee();
    }
    //if (!(this instanceof Waffle)) {
    //    return new Waffle();
    //}
    this.tastes = "yummy";
}
Waffle.prototype.wantAnother = true;
// testing invocations
var first = new Waffle(),
    second = Waffle();

//console.log(first.tastes); // "yummy"
//console.log(second.tastes); // "yummy"
//
//console.log(first.wantAnother); // true
//console.log(second.wantAnother); // true


// array of three elements
// warning: antipattern
var b = new Array("itsy", "bitsy", "spider");

// the exact same array
var a = ["itsy", "bitsy", "spider"];

//console.log(typeof a); // "object", because arrays are objects
//console.log(a.constructor === Array); // true

// an array of one element
var a = [3];
//console.log(a.length); // 1
//console.log(a[0]); // 3

// an array of three elements
var a = new Array(3);
//console.log(a.length); // 3
//console.log(typeof a[0]); // "undefined"


// using array literal
//var a = [3.14];
//console.log(a[0]); // 3.14

//var a = new Array(3.14); // RangeError: invalid array length
//console.log(typeof a); // "undefined"

//console.log(Array.isArray(a));

var json = {"name": "value", "some": [ 1, 2, 3]};
console.log(json);
