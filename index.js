"use strict";
var datos_limpios = function (datos) { return datos.reduce(function (acc, el) { return acc.concat(el); }, []); };
var datos = datos_limpios([[1, 2], [[3, 4]], [1, []]]);
console.log(datos);
