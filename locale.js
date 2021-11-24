"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var str = (0, date_fns_1.formatRelative)((0, date_fns_1.subDays)(new Date(), 3), new Date());
//=> "last Friday at 7:26 p.m."
console.log(str);
str = (0, date_fns_1.formatRelative)((0, date_fns_1.subDays)(new Date(), 3), new Date(), { locale: locale_1.es });
//=> "el viernes pasado a las 19:26"
console.log(str);
str = (0, date_fns_1.formatRelative)((0, date_fns_1.subDays)(new Date(), 3), new Date(), { locale: locale_1.ru });
//=> "в прошлую пятницу в 19:26"
console.log(str);
str = (0, date_fns_1.formatRelative)((0, date_fns_1.subDays)(new Date(), 4), new Date(), { locale: locale_1.fr });
//=> "dimanche dernier à 15:50"
console.log(str);
str = (0, date_fns_1.format)(new Date(), 'EEEE dd/MMMM/yyyy', { locale: locale_1.fr });
//=> "dimanche dernier à 15:50"
console.log(str);
