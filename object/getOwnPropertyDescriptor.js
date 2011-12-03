var Engine = Object.create(null);

Object.defineProperty(Engine, "x", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true
});

// Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(Engine, 'x'));
/*
{
    configurable: true,
    enumerable: true,
    value: 0,
    writable: true
}
*/
