"use strict";
var mascotas = [
    {
        nombre: "Masha",
        edad: "12",
        raza: "gato"
    }, {
        nombre: "Coper",
        edad: "5",
        raza: "gato"
    }, {
        nombre: "Cheto",
        edad: "16",
        raza: "perro"
    }
];
var numeros = [10, 2, 9, 10];
var multiplicados = numeros.map(function (elemento) { return elemento * 2; });
var parejas = numeros.map(function (elemento) { return [elemento, elemento]; });
var obtener_numeros_mascotas = mascotas.map(function (elemento) { return parseInt(elemento.edad); });
var suma_numeros = obtener_numeros_mascotas.reduce(function (acumulador, elemento) { return acumulador + elemento; });
//console.log(parejas);
//console.log(multiplicados);
console.log(obtener_numeros_mascotas);
console.log(suma_numeros);
