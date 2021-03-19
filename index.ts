/*const p1=Promise.resolve(1);
console.log(p1);
//p1.then( x => console.log(x) );
p1.then( x => x + 5 )
    .then( x => Promise.resolve( x + 5) )
    .then( x => Promise.reject( 'Error' ) )
    .then( x => console.log('Esto no se va a ejecutar'))
    .catch( e => console.log(e));*/

const delay = x => new Promise((resolve, reject ) => setTimeout(() => resolve(x), 900));

delay(7)
    .then( x => {
        console.log(x)
        return delay( x + 7)
    })
    .then( x => console.log( x ))
    .then( x => Promise.reject('Hubo un error'))
    .catch( e => console.log(e))