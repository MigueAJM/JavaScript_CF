// Iteradores => cualquier objeto que implementa el protocolo de iterador
// solo entregaun dato a la vez
let iterador = {
  currentValue: 1,
  next(){
    let resultado = {
      value: null,
      done: false
    };
    if(this.currentValue > 0 && this.currentValue <= 5){
      resultado = { value: this.currentValue, done: false};
      this.currentValue += 1;
    }else{
      result = {done: true};
    }
    return resultado;
  }
};
let item = iterador.next();
while(!item.done){
  console.log(item.value);
  item = iterador.next();
}


// Generadores => sintaxis mas clara y consiza
function* counter(){
  console.log("Estoy aqui");
  yield 1;
  console.log("Ahora estoy aqui");
  yield 2;
}
let generador = counter();
console.log(generador.next());
console.log(generador.next());

function* counter(){
  for(var i = 1; i<=5; i++){
    yield i;
  }
}
let generador = counter();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());


//Return en funciones generadoras
// yield es muy parecido a return
function* retornador(){
  return 3;
}

let g = retornador();
console.log(g.next());

function* counter(){
  for(var i = 1; i<=5; i++){
    yield i;
  }
}
let generador = counter();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

//Delegar Generadores
function* counter(){
  for(var i = 1; i<=5; i++){
    yield i;
  }
}
let generador = counter();

function* retornador(){
  yield* counter ;
  console.log("Regrese");
}

let g = retornador();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


//  Manejo de simbolos
let simbolo = Symbol('mi-simbolo');
let simbolo2 = Symbol('mi-simbolo');
console.log(simbolo == simbolo2);

let obj = {

};

obj[simbolo] = function(){
  console.log("Mi nombre es un simbolo");
}

obj[simbolo]();
