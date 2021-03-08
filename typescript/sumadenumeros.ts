const suma_de_elementos=(datos:number[])=>{
    return datos.reduce((acumulador,elemento)=>acumulador+elemento,0);
}

const datos=suma_de_elementos([3,6,1,4,5]);

console.log(`la suma de todos los elementos es ${datos}`);