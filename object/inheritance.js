// Inheritance
var Engine = Object.create(null, {
    name: {
        value: 'Game Engine',
        writable: false,
        enumerable: false,
        configurable: false
    },

    version: {
        value: '1.1.0',
        writable: false,
        enumerable: false,
        configurable: false
    }
});

var AngryBirds = Object.create(Engine, {
    getEngine: {
        value: function() {
            return this.name;
        }
    }
});