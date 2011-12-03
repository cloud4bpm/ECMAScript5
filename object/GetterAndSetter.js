
var Engine = Object.create(null);

Object.defineProperty(Engine, "x", {

    get: function() {
        return this.value;
    },

    set: function(value) {
        this.value = value;
    }

});

Engine.x = 10;
Engine.x      // 10


