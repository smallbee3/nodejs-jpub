const crypto = require('crypto');

// let result = crypto.createHash('sha256').update('some data to hash').digest('hex');
let result = crypto.createHash('sha512').update('some data to hash');
console.log(1, result );

result = result.digest('hex');
console.log(2, result );
