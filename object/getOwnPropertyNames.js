
var Parent = Object.create(null);

Object.defineProperty(Parent, "x", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true
});


var Child = Object.create(Parent, {
    y: {
        value: 0,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(Object.getOwnPropertyNames(Array.prototype));  // ["length", "constructor", "toSource"...]

console.log(Object.getOwnPropertyNames({x:1, y:2, z:3})); // [x, y, z]

console.log(Object.getOwnPropertyNames(Parent));          // [x]
                                                          // (enumerable or not)

console.log(Object.getOwnPropertyNames(Child));          // [y]
                                                         // (enumerable or not)