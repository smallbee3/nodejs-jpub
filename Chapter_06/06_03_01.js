const qs = require('qs');

var obj = qs.parse('a=1&b=2');

console.log(11, obj, typeof obj)

console.log(1,  JSON.stringify( obj ) );

var str = qs.stringify( obj );
console.log(2,  str );

console.log(33,  JSON.parse('{"a":"1","b":"2"}') );

var str = qs.stringify( JSON.parse('{"a":"1","b":"2"}') );
console.log(3, str );
