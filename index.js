"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var numeros = [1, 4, 5, 7, 3, 9].reduce(function (acumulador, elemento) { return acumulador + elemento; }, 0);
var numeros_mascotas = mascotas.reduce(function (acumulador, elemento) {
    var _a;
    return (__assign(__assign({}, acumulador), (_a = {}, _a[elemento.nombre] = elemento, _a)));
}, {});
console.log(numeros_mascotas['Masha']);
