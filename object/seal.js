"use strict";

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
    enumerable: true,
    configurable: true
});

Object.seal(Engine);
console.log(Object.isSealed(Engine)); // true
console.log(delete Engine.x);         // false

Engine.x = 10;
console.log(Engine.x);                // 10