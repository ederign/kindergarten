var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
//console.log(c);

var join = c.join(',');
//console.log(join);

var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');
//console.log(c);

var a = ['a', 'b', 'c'];
var c = a.pop(  );
//console.log(c);

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
//console.log(a);
//console.log(c);

var a = ['a', 'b', 'c'];
var b = a.reverse(  );

//console.log(a);
//console.log(b);

var a = ['a', 'b', 'c'];
var c = a.shift(  );
//console.log(a);
//console.log(c);

var a = ['a', 'b', 'c'];
var b = a.slice(0, 1);
var c = a.slice(1);
var d = a.slice(1, 2)

//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);

var n = [4, 8, 15, 16, 23, 42];
//n.sort(  );
//console.log(n);
n.sort(function (a, b) {
    var diff = (a - b);
    return diff;
});
n.sort();
console.log(n);


