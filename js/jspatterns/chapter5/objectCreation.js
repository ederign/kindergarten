Object.prototype.alert = function (msg) {
    console.log(msg);
};

//Before : 5 globals
//Warning: antipattern
function Parent(){};
function Child(){};

var some_var=1;

var module1 = {};
module1.data={a:1, b:2};
var module2={};

//After: 1 Global
//var MYAPP={};//UNSAFE

//if(typeof MYAPP==="undefined"){
//    var MYAPP = {};
//}

var MYAPP= MYAPP || {};

MYAPP.Parent = function () {};
MYAPP.Child = function(){};

MYAPP.some_var = 1;
MYAPP.modules={};
MYAPP.modules.module1={};
MYAPP.modules.module1.data={a:1, b:2};
MYAPP.modules.module2 = {};



var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;

    // strip redundant leading global
    if (parts[0] === "MYAPP") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

// assign returned value to a local var
var module2 = MYAPP.namespace('MYAPP.modules.module2');
//console.log(module2 === MYAPP.modules.module2); // true

// skip initial `MYAPP`
MYAPP.namespace('modules.module51');

// long namespace
MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');


//private properties and methods

var myobj = {
    myprop : 1,
    getProp: function () {
      return this.myprop;
    }
};
//console.log(myobj.myprop);
//console.log(myobj.getProp());

//function Gadget(){
//    this.name = 'Ipod';
//    this.stretch = function () {
//        return 'iPad';
//    }
//}
//var toy = new Gadget();
//console.log(toy.name);
//console.log(toy.stretch());


function Gadget(){
    var name = 'Ipod';
    this.getName = function(){
        return name;
    }
}

var toy = new Gadget();
//console.log(toy.name);
console.log(toy.getName())


function GadgetWithSpecs(){
    var specs = {
        width: 320,
        height: 480,
        color: "white"
    };
    this.getSpecs = function(){
        return specs;
    };
}

var toy = new GadgetWithSpecs(),
    specs = toy.getSpecs();

console.log(toy.getSpecs());
specs.color = "black";
console.log(toy.getSpecs());

//object literals