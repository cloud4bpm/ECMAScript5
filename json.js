
JSON.parse('{"name":"JavaScript","version":"1.7"}', function(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}); // Object { name="JAVASCRIPT", version="1.7"}


var result = {
    1: 1,
    2: 2,
    3: 3,
    4: 'four'
};

JSON.stringify(result, function(key, value) {
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}, '\t');

/*
    {
        "1": 1,
        "2": 2,
        "3": 3
    }
*/