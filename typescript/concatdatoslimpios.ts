const datos_limpios=(datos:number[])=> datos.reduce((acc,el)=>acc.concat(el),[]);

const datos=datos_limpios([[1,2],[[3,4]],[1,[]]]);

console.log(datos);