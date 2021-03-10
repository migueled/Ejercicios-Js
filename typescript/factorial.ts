const factorial =( numero:number ):number => {
    return numero <= 1 ? 1 : numero * factorial(numero-1);
}

const numero = factorial(5);

console.log(`el factorial es ${ numero }`);