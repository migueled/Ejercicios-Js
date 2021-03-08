const multiplicacion:number=(valor1:number,vecesDeCiclo:number)=>{
    let total:number    =0;

    for (let index = 0; index < vecesDeCiclo; index++) {
                total=total+valor1
    }
    return total;
};

const datos:number=multiplicacion(5,3);
console.log(`el resultado es ${datos}`);
