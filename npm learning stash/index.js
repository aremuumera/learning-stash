const _ = require('lodash');

const numbers = [34, 34, 35, 36, 37, 3, 4];

_.each(numbers, function (number, i){
    console.log(number);
});
