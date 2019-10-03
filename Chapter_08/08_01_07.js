var mysql      = require('mysql');
var val_name1 = 'a';
var val_name2 = 'b';

var str = mysql.format( 'SELECT col1 , col2 , col3 FROM mytable where col1 = ? and col2 = ?', [ val_name1 , val_name2 ] );
console.log( str );
