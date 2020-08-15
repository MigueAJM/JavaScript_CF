//CallBacks => funcion que se pasa como argumento a una operacion asincrona
const request = require('request');
//require sintaxis que se hereda de una libreria para importar paquetes esternos
request('https://google.com', function(){
  console.log('Termine la petición a google');
});
console.log('Yo voy después, en el codigo, de la petición a Google')
