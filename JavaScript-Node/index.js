//CallBacks => funcion que se pasa como argumento a una operacion asincrona
//Se instala request => npm install request
const request = require('request');
//require sintaxis que se hereda de una libreria para importar paquetes esternos
request('https://google.com', function(){
  console.log('Termine la petición a Google');
});
console.log('Yo voy después, en el codigo, de la petición a Google')

// Promesas
// Se instala request promise => npm install request-promise
//  adaptación de la libreria request
const rp = require('request-promise');
rp('https://google.com').then(function(html){
  console.log('Termine la petición a Google');
}).catch(function(error){
  console.log(error);
})
/*
* Estados de las Promesas
* Fullfiled
* Rejected
* Pending
* Setled
*/

// Crear mis propias Promesas
function asincrono(){
  return new Promise(function(resolve, reject){
    resolve('Todo salio bien');

    reject(new Error('No se pudo completar'));
  });
}

const request = require('request');

function leer(url){
  return new Promise(function(resolve, reject){
    // metodo asincrono
    request(url, function(err, response){
      if(err) {
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
}

leer('https://codigofacilito.com')
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  })
