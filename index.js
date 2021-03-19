"use strict";
var altura = 1.75;
var peso = 56;
/*peso/kilogramoos^2*/
var IMC = function (peso, altura) {
    return "El IMC es " + peso / (Math.pow(altura, 2));
};
var resultado = IMC(65, 1.60);
console.log(resultado);
