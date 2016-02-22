var add = function (a, b) {
    return a + b;
}

//console.log(add(1, 2, 3, 4));

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
//console.log(myObject.value);
myObject.increment(2);
//console.log(myObject.value);

myObject.double = function () {
    var that = this;    // Workaround.

    var helper = function () {
        that.value = add(that.value, that.value);
    };

    helper();    // Invoke helper as a function.
};

// Invoke double as a method.

myObject.double();
//console.log(myObject.value);


// Create a constructor function called Quo.
// It makes an object with a status property.

var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function () {
    return this.status;
};

// Make an instance of Quo.


var myQuo = new Quo("confused");

//console.log(myQuo.get_status());

// Make an array of 2 numbers and add them.

var array = [3, 4];
var sum = add.apply(null, array);

//console.log(sum)

// Make an object with a status member.

var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'
//console.log(status);

// Make a function that adds a lot of stuff.

// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

//console.log(
//    sum(4, 8, 15, 16, 23, 42)
//);

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}

//console.log(add('a', 'a'));

var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
}

//try_it(  );

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
//console.log((10/3).integer());

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

//console.log('"' + "   neat   ".trim(  ) + '"')


var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        disc1 = disc - 1;
        hanoi(disc1, src, dst, aux);
        console.log('Move disc ' + disc +
            ' from ' + src + ' to ' + dst);
        disc2 = disc - 1;
        hanoi((disc2), aux, src, dst);
    }
};
//hanoi(3, 'Src', 'Aux', 'Dst');


var foo = function () {
    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;

// At this point, a is 3, b is 7, and c is 11

        a += b + c;

// At this point, a is 21, b is 7, and c is 11

    };

// At this point, a is 3, b is 5, and c is not defined

    bar();
// At this point, a is 21, b is 5

};


var myObject = (function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}());

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

// Make an instance of quo.

var myQuo = quo("amazed");

//console.log(myQuo.get_status(  ));


// Define a function that sets a DOM node's color
// to yellow and then fades it to white.

var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

//fade(document.body);

String.method('deentityify', function () {

// The entity table. It maps entity names to
// characters.

    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

// Return the deentityify method.

    return function () {
// This is the deentityify method. It calls the string
// replace method, looking for substrings that start
// with '&' and end with ';'. If the characters in
// between are in the entity table, then replace the
// entity with the character from the table. It uses
// a regular expression (Chapter 7).

        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());

//console.log('&lt;&quot;&gt;'.deentityify(  ));

var serial_maker = function () {

// Produce an object that produces unique strings. A
// unique string is made up of two parts: a prefix
// and a sequence number. The object comes with
// methods for setting the prefix and sequence
// number, and a gensym method that produces unique
// strings.

    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
//console.log(unique);
//console.log(seqer.gensym( ));

var uses = function (serial_algo) {
    return serial_algo();
}
//console.log(uses(seqer.gensym));

Function.method('curry', function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});
var add1 = add.curry(1);
//console.log(add1(6));
var fibonacci = function (n) {
    var menos1 = n - 1;
    var menos2 = n - 2;
    return n < 2 ? n : fibonacci(menos1) + fibonacci(menos2);
};
var fibonacciMemo = (function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            var menos1 = n - 1;
            var menos2 = n - 2;
            result = fib(menos1) + fib(menos2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}());

for (var i = 0; i <= 10; i += 1) {
    //console.log('// ' + i + ': ' + fibonacciMemo(i));
}

var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fibonacciUsingMemoizer = memoizer([0, 1], function (recur, n) {
    var menos1 = n - 1;
    var menos2 = n - 2;
    return recur(menos1) + recur(menos2);
});

var factorial = memoizer([1, 1], function (recur, n) {
    var menos1 = n - 1;
    return n * recur(menos1);
});
//console.log(factorial(10));

var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function () {
    return this.name;
};

Mammal.prototype.says = function () {
    return this.saying || '';
};
var myMammal = new Mammal('Herb the Mammal');
//console.log(myMammal.get_name());

var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};
// Replace Cat.prototype with a new instance of Mammal

Cat.prototype = new Mammal();

// Augment the new prototype with
// purr and get_name methods.
Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
Cat.prototype.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};
var myCat = new Cat('Henrietta');
//console.log(myCat.says());
//console.log(myCat.purr(5));
//console.log(myCat.get_name());

Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

var NewCat = function (name) {
    this.name = name;
    this.saying = 'meow';
}.inherits(Mammal).method('purr', function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
}).method('get_name', function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
});


var otherMam = {
    name : 'Herb the Mammal',
    get_name : function (  ) {
        return this.name;
    },
    says : function (  ) {
        return this.saying || '';
    }
};

var dora = Object.create(myMammal);
dora.name = 'Dora';
dora.saying = 'au au';
dora.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
dora.get_name = function(){
    return this.says() + ' ' + this.name + ' ' + this.says();
}
