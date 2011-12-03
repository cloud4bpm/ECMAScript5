

var Parent = Object.create(null);

Object.defineProperty(Parent, "x", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true
});

// Object.keys
console.log(Object.keys([1, 2, 3]));       // 0, 1, 2
console.log(Object.keys({x:1, y:2, z:3})); // x, y, z
console.log(Object.keys(Parent));          // [x]
                                           // only enumerable = true
                                           // if enumerable = false
                                           // []
