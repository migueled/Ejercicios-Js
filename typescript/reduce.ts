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

const numeros             = [1,4,5,7,3,9].reduce( ( acumulador , elemento ) => acumulador + elemento ,0);

const numeros_mascotas    = mascotas.reduce( ( acumulador , elemento ) => ({
    ...acumulador,
    [ elemento.nombre ] : elemento ,
}),{});

console.log(numeros_mascotas['Masha']);

