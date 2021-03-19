let altura=1.75;
let peso=56;
/*peso/kilogramoos^2*/

let IMC=(peso:number, altura:number)=>{
    return `El IMC es ${ peso /( altura ** 2 ) }`;
}
let resultado=IMC( 65  , 1.60 );
console.log(resultado);