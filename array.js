// indexOf
console.log('indexOf');
console.log([1, 2, 4, 5, 6, 8, 2].indexOf(6));  // 4
console.log([1, 2, 4, 5, 6, 8, 2].indexOf(7));  // -1
console.log([1, 2, 4, 5, 6, 8, 2].indexOf());   // -1

// lastIndexOf
console.log('lastIndexOf');
console.log([1, 2, 4, 5, 6, 8, 2].lastIndexOf(2)); // 6
console.log([1, 2, 4, 5, 6, 8, 2].lastIndexOf(9)); // -1
console.log([1, 2, 4, 5, 6, 8, 2].lastIndexOf());  // -1

// every
console.log('every');
function isEvenNumber(element, index, array) {
    return (element % 2) === 0;
}

console.log([1, 3, 54, 6].every(isEvenNumber));    // false
console.log([2, 4, 6, 8, 10].every(isEvenNumber)); // true

//filter
console.log('filter');

console.log(
    [2, 4, 6, 10, 3, 7, 2, 1].filter(function(element, index, array) {
        return (element % 2) === 0;
    })
); // [2, 4, 6, 10, 2]

// forEach
console.log('forEach');

[2, 5, 9, 9].forEach(function(element, index, array) {
    console.log("array[" + index + "] = " + element);
})
// array[0] = 2
// array[1] = 5
// array[2] = 9
// array[3] = 9

// map
console.log('map');
console.log(
    [2, 5, 9, 9].map(function(element, index, array) {
        return (element * 2);
    })
);
// [4, 10, 18, 18]

// some
console.log('some');
function isEvenNumber(element, index, array) {
    return (element % 2) === 0;
}

console.log(
    [1, 3, 3, 5].some(function(element, index, array) {
        return (element % 2) === 0
    })
); // false

console.log(
    [1, 3, 4, 5].some(function(element, index, array) {
        return (element % 2) === 0
    })
); // true

// isArray
console.log('isArray');

console.log(Array.isArray([]));                // true
console.log(Array.isArray([1]));               // true
console.log(Array.isArray( new Array() ));     // true
console.log(Array.isArray( Array.prototype )); // true

console.log(Array.isArray());                  // false
console.log(Array.isArray({}));                // false
console.log(Array.isArray(null));              // false
console.log(Array.isArray(undefined));         // false
console.log(Array.isArray(17));                // false
console.log(Array.isArray("Array"));           // false
console.log(Array.isArray(true));              // false
console.log(Array.isArray(false));             // false

// reduce
console.log('reduce');
console.log(
    [4, 5, 6, 7].reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    })
);
// 22
/*
    4 + 5
    9 + 6
    15 + 7
    == 22
*/

// reduceRight
console.log('reduceRight');
console.log(
    [4, 5, 6, 7].reduceRight(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    })
);
// 22
/*
    7 + 6
    13 + 5
    18 + 4
    == 22
*/