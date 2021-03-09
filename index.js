"use strict";
/*const datos:number[]=[1,2,3,4,5,6,7,8,9];

const filtro=datos.filter( elemento => elemento < 5);

console.log(`los datos son ${filtro}`);*/
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
var filtro_perros = mascotas.filter(function (tipo) { return tipo.raza == 'perro'; });
var contador_perros = filtro_perros.length;
var filtro_gatos = mascotas.filter(function (tipo) { return tipo.raza == 'gato'; });
var contador_gatos = filtro_gatos.length;
console.log("los perros son " + filtro_perros + " con cantidad de " + contador_perros);
console.log("los perros son " + filtro_gatos + " con cantidad de " + contador_gatos);
