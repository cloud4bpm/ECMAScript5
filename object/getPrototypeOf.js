
// Validate data types

var reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true

var err = new Error("an error");
Object.getPrototypeOf(err) === Error.prototype; // true


//

var Engine = Object.create(null, {
    version: {
        value: '1.1.0',
        writable: false,
        enumerable: true,
        configurable: false
    }
});

console.log(Object.getPrototypeOf(Engine));  // true


//

function main() {};
main.prototype.init = function() {};

var m = new main();

console.log( typeof main.prototype );           // object
console.log( typeof m.prototype );              // undefined
console.log( typeof Object.getPrototypeOf(m) ); // object
console.log( typeof m.constructor.prototype );  // object

console.log( main.prototype === Object.getPrototypeOf(m) ); // true
console.log( main.prototype === m.constructor.prototype );  // true


