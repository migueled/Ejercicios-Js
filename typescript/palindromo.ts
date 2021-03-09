const respuesta = (palindromo:string) => {
    let eliminar_espacios  = palindromo.replace(/\s/g,'');
    let minusculas         = eliminar_espacios.toLowerCase();
    let dividir            = minusculas.split('');
    let invertido          = dividir.reverse();
    let join               = invertido.join('');
        
    return minusculas == join;
};

const palindromo = respuesta( 'Alli va Ramon y no maravilla' );

console.log( palindromo );