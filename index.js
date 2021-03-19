"use strict";
var myArr = ['a', '*', 'l', '*', 'o', 'H'];
var Filter = myArr.filter(function (elemento) { return elemento != '*'; }).reverse().join('');
console.log(Filter);
