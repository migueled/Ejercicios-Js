"use strict";
var arr = [1, 2, 3, 9, 12, 3, 27];
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log("El valor max es " + max + " el valor minimo es " + min);
