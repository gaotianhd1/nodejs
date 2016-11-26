var counter = require('./lib.js').counter;
var incCounter = require('./lib.js').incCounter;
console.log(counter);
incCounter();
console.log(counter);
console.log(__filename);
console.log(__dirname);
console.log(global);

