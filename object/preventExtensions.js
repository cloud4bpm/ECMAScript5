var Engine = Object.create(null);

Object.defineProperty(Engine, "x", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.isExtensible(Engine) // true

Object.preventExtensions(Engine);

Object.isExtensible(Engine) // false

Object.defineProperty(Engine, "y", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true
});                           // Exception is not extensible





