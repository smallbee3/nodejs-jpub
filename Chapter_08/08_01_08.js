var mysql      = require('mysql');
var val_name1 = 'a';
var val_name2 = 'b';

// var str = mysql.format( 'SELECT col1 , col2 , col3 FROM mytable where col1 = '+mysql.escape( val_name1 )+' and col2 = '+mysql.escape( val_name2 )+' );
var str = mysql.format( 'SELECT col1 , col2 , col3 FROM mytable where col1 = ' + mysql.escape( val_name1 ) + ' and col2 = ' + mysql.escape( val_name2 ) );
console.log( str );
