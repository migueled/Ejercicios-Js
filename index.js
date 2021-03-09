"use strict";
var respuesta = function (palindromo) {
    var eliminar_espacios = palindromo.replace(/\s/g, '');
    var minusculas = eliminar_espacios.toLowerCase();
    var dividir = minusculas.split('');
    var invertido = dividir.reverse();
    var join = invertido.join('');
    return minusculas == join;
};
var palindromo = respuesta('Alli va Ramon y no maravilla');
console.log(palindromo);
