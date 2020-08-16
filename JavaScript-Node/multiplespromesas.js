let p1 = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola mundo'));
let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 600, 'Second Hola mundo'));
let p3 = Promise.reject();
let saluda = ()=> console.log('Hola a todos');

//p1.then(function(){
//  p2.then(function(){
//    saluda();
//  })
//});
//promise.all falla si alguna de las promesas llega a fallar
Promise.all([p1, p2, p3]).then(resultado=>{
  console.log(resultado);
  saluda();
}).catch(()=> console.log('Falle :('));
