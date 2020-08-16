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
