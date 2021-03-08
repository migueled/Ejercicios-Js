const datos_limpios=(datos:number[])=> datos.reduce((acc,el)=>{
    if(el){
        acc.push(el);
    }
    return acc;
},[]);

const datos=datos_limpios([1,6,undefined,12,null,76,0]);

console.log(datos);