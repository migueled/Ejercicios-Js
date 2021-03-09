"use strict";
function factorial(numero) {
    return numero <= 1 ? 1 : numero * factorial(numero - 1);
}
var numero = factorial(5);
console.log("el factorial es " + numero);
