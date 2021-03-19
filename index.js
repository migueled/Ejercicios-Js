"use strict";
/*const p1=Promise.resolve(1);
console.log(p1);
//p1.then( x => console.log(x) );
p1.then( x => x + 5 )
    .then( x => Promise.resolve( x + 5) )
    .then( x => Promise.reject( 'Error' ) )
    .then( x => console.log('Esto no se va a ejecutar'))
    .catch( e => console.log(e));*/
var delay = function (x) { return new Promise(function (resolve, reject) { return setTimeout(function () { return resolve(x); }, 900); }); };
delay(7)
    .then(function (x) {
    console.log(x);
    return delay(x + 7);
})
    .then(function (x) { return console.log(x); })
    .then(function (x) { return Promise.reject('Hubo un error'); })
    .catch(function (e) { return console.log(e); });
