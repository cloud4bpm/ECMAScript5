var x = 0;

var Engine = {
    x: 10,
    getX: function() {
        return this.x;
    }
};

Engine.getX();                      // 10

var getX = Engine.getX;
getX();                             // 0


var boundGetX = getX.bind(Engine);
boundGetX();                        // 10


// default value
var sum = function(a, b) {
    return a + b;
}
var result = sum.bind(undefined, 1);
result(1);                           // 2
