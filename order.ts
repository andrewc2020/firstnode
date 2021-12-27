 

import {_} from 'lodash';

interface IPerson {
    name: string,
    age: number,
    worked: number,
    parent?: IPerson
}



const people : IPerson[]= [
    { name : 'fred', age : 62, worked : 30, parent : { name : 'eliza', age : 92, worked : 59,} },
    { name : 'william', age : 12, worked : 0, parent : {name : 'mary', age : 40, worked : 25 }},
    { name : 'sally', age : 26 , worked : 10, parent : { name : 'john', age : 72, worked : 50 }},
    { name : 'beth', age : 3, worked : 0, parent : { name : 'violet', age : 20, worked : 8 } }
    
];



function propExtractor(key){
    return function(object){
        return object[key]; /*?*/
    }
}

let createSort = _.curry(function(treat){
    
    
        return (A: number, B: number) => treat(A) > treat(B)? 1: -1;
   
    
   
    
    
}); //?




let createSortDesc = _.curry(function(treat){
    return (A,B) => treat(B) > treat(A)? 1: -1;

})

const getParent = _.curry(propExtractor('parent'));
const getWorked = _.curry(propExtractor('worked'));
const getName = _.curry(propExtractor('name'));
const getAge = _.curry(propExtractor('age')); /*?*/



people.sort(createSort(getWorked));

console.log('sorted by worked:', people);

people.sort(createSort(getName));


console.log('sorted by name:', people);

people.sort(createSort(getAge));


console.log('sorted by age:', people);

people.sort(createSortDesc(getAge));


console.log('sorted by age desc:', people);

people.sort(createSortDesc(getParent,getAge));


console.log('sorted by parent age:', people);



people.sort(createSort(getParent,getAge));

console.log('sorted by parent\'s age Desc', people);


people.sort(createSort(getParent,getWorked));

console.log('sorted by parent\'s years spent working', people);

people.sort(createSort(getWorked,getName));

console.log('sorted by years spent working then name', people);