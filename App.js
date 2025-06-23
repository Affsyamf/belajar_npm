console.log('halo');

const validator = require('validator');

console.log(validator.isEmail('A@gmail.com'));
console.log(validator.isMobilePhone('085830379', 'id-ID'));
console.log(validator.isNumeric('085830379'));

