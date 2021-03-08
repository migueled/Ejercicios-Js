"use strict";
var suma_de_elementos = function (datos) {
    return datos.reduce(function (acumulador, elemento) { return acumulador + elemento; }, 0);
};
var datos = suma_de_elementos([3, 6, 1, 4, 5]);
console.log("la suma de todos los elementos es " + datos);
