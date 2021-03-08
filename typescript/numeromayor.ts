const numeroMayor=(array:number[])=> array.reduce((acumulador,elemento)=>acumulador>elemento ? acumulador:elemento);

const datos=numeroMayor([50,-1500,1000,0,1,54]);

console.log(`el numero mayor es ${datos}`)

