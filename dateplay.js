"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
(0, date_fns_1.format)(new Date(2014, 1, 11), 'MM/dd/yyyy');
//=> '02/11/2014'
var dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];
dates.sort(date_fns_1.compareAsc);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
console.log(dates);
