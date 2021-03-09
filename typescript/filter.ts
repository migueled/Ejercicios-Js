/*const datos:number[]=[1,2,3,4,5,6,7,8,9];

const filtro=datos.filter( elemento => elemento < 5);

console.log(`los datos son ${filtro}`);*/
const mascotas=[
    { 
        nombre    : "Masha",
        edad      : "12",
        raza      : "gato"
    },{
        nombre    : "Coper",
        edad      : "5",
        raza      : "gato"
    },{
        nombre    : "Cheto",
        edad      : "16",
        raza      : "perro"
    }
];

const filtro_perros       = mascotas.filter( tipo => tipo.raza=='perro');
const contador_perros     = filtro_perros.length;
const filtro_gatos        = mascotas.filter( tipo => tipo.raza=='gato');
const contador_gatos      = filtro_gatos.length;

console.log(`los perros son ${filtro_perros} con cantidad de ${contador_perros}`);
console.log(`los perros son ${filtro_gatos} con cantidad de ${contador_gatos}`);