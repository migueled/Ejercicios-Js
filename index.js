"use strict";
var trampoline = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = fn.apply(void 0, args);
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}; };
var suma = function (number, sum) {
    if (sum === void 0) { sum = 0; }
    return (number === 0
        ? sum
        : function () { return suma(number - 1, sum + number); });
};
var tsuma = trampoline(suma);
var resultado = tsuma(10000);
console.log(resultado);
