"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var people = [
    { name: 'fred', age: 62, worked: 30, parent: { name: 'eliza', age: 92, worked: 59 } },
    { name: 'william', age: 12, worked: 0, parent: { name: 'mary', age: 40, worked: 25 } },
    { name: 'sally', age: 26, worked: 10, parent: { name: 'john', age: 72, worked: 50 } },
    { name: 'beth', age: 3, worked: 0, parent: { name: 'violet', age: 20, worked: 8 } }
];
function propExtractor(key) {
    return function (object) {
        return object[key]; /*?*/
    };
}
var createSort = lodash_1._.curry(function (treat) {
    return function (A, B) { return treat(A) > treat(B)? 1: -1; };
});
var createSortDesc = lodash_1._.curry(function (treat) {
    return function (A, B) { return treat(B) - treat(A); };
});
var getParent = lodash_1._.curry(propExtractor('parent'));
var getWorked = lodash_1._.curry(propExtractor('worked'));
var getName = lodash_1._.curry(propExtractor('name'));
var getAge = lodash_1._.curry(propExtractor('age'));
people.sort(createSort(getWorked));
console.log('sorted by worked:', people);
people.sort(createSort(getName));
console.log('sorted by name:', people);
people.sort(createSort(getAge));
console.log('sorted by age:', people);
people.sort(createSortDesc(getAge));
console.log('sorted by age desc:', people);
people.sort(createSortDesc(getParent, getAge));
console.log('sorted by parent age desc:', people);
people.sort(createSort(getParent, getAge));
console.log('sorted by parent\'s age', people);
people.sort(createSort(getParent, getWorked));
console.log('sorted by parent\'s years spent working', people);
people.sort(createSort(getWorked, getName));
console.log('sorted by years spent working then name', people);
