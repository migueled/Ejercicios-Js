"use strict";
var numeroMayor = function (array) { return array.reduce(function (acumulador, elemento) { return acumulador > elemento ? acumulador : elemento; }); };
var datos = numeroMayor([50, -1500, 1000, 0, 1, 54]);
console.log("el numero mayor es " + datos);
