"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var animals = [
    { name: "fluffykins", species: "rabbit" },
    { name: "Miralda", species: "cat" },
    { name: "Marmaduke", species: "dog" }
];
var dogs = animals.filter(function (x) { return x.species == "dog"; });
var output = fs_1.readFile('data.txt', 'utf8',function(){
    console.log(output);
})
    
console.log(dogs);
