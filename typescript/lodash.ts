const _ =require('lodash')

const users=[
    { id: 1, nombre: 'nicolas', apellido: 'Schurman' }
];

const geNombreCompleto = ( _users ) => {
    const primero = users[0];
    const capitalizado = {
        nombre: _.upperFirst( primero.nombre ),
        apellido: _.upperFirst( primero.apellido ),
    }
    return `${ capitalizado.nombre } ${ capitalizado.apellido }`;
}

const x = geNombreCompleto( users );
console.log(x);