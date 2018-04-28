let orders =[3,7,2,9,25,4];

let arrayaverage = (arr)  => arr.reduce((sum,o) => o + sum,0)/ arr.length;

let averageorders =
arrayaverage(orders);/*?*/

let differences =
orders.map((x) => x - averageorders).map((x) => x * x );

let variance = arrayaverage(differences);


let standard_deviation =
Math.sqrt(variance);/*?*/

console.log(standard_deviation);

let isOutlier = orders.map((x) => x - standard_deviation > 0);

console.log(isOutlier);






