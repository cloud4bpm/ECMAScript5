
var Engine = Object.create(null);

Object.defineProperty(Engine, "x", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(Engine, "y", {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: false
});

// writable
Engine.x = 10;
console.log(Engine.x); // 10

Engine.y = 20;
console.log(Engine.y); // 0

// configurable
Object.defineProperty(Engine, "x", {
    value: 1,
    writable: false
});

Engine.x = 10;
console.log(Engine.x); // 1

delete Engine.x        // delete property

// enumerable
for (var i in Engine) {
    console.log(i); // x
}
