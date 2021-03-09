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

const numeros                   = [10,2,9,10];

const multiplicados             = numeros.map( elemento => elemento * 2);

const parejas                   = numeros.map( elemento => [ elemento , elemento ] );

const obtener_numeros_mascotas  = mascotas.map( elemento => parseInt( elemento.edad ) );

const suma_numeros              = obtener_numeros_mascotas.reduce( ( acumulador , elemento ) => acumulador + elemento);
//console.log(parejas);
//console.log(multiplicados);
console.log(obtener_numeros_mascotas);
console.log(suma_numeros);

