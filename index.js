"use strict";
var datos_limpios = function (datos) { return datos.reduce(function (acc, el) {
    if (el) {
        acc.push(el);
    }
    return acc;
}, []); };
var datos = datos_limpios([1, 6, undefined, 12, null, 76, 0]);
console.log(datos);
