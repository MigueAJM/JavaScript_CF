/*
  Introducción
*/
//Imprimir datos en consola
console.log("Hola mundo");
//  Recibir datos
prompt();
/*
    Como es JavaScript
    Tecnicamente
*/
//  Variables(Dirección en memoria)
let nombre = "Miguel";
var apellido = "Jimenez";
//Constantes  -- JavaScript es un lenguaje tipado, para declarar varibles sigue un estandar
const PI = 3.1416;

//Numeros y operaciones aritmeticas
// libreria/biblioteca: Codigo que otros desarrolladores comparten con los demas.
Math.PI;
Math.pow(10, 2);
Math.round(6.5);
Math.sqrt(4); // https://www.w3schools.com/js/js_math.asp

// Booleanos
let notificacionesactivas = true;
let recibirCorreos = false;

let booleano = new Boolean(1);
console.log(booleano.toString());
// valores booleanos -- undefined, NaN, null, 0 , .0, "", false

//Operadores de comparación
let edad =24;
edad == 24; // ignora el tipo de dato == "24" dara true
edad != 24;
edad !== "24" // igul con un signo mas compara el tipo de dato
edad > 24;
edad < 24;
edad <= 24
edad >= 24;
edad === 24 // compara tambien el tipo de dato === "24" dara false

//Operadores lógicos
&&  ||  !true !false !(24 == 24)

//Condiciones
if (5 == 5 && 10 > 2) console.log("Condiciòn exitosa"); //si solo es una instrucciòn no es necesario el uso de llaves
if (5 == 5 && 10 > 2){ //Para un par de instruciones es necesario usar llevar en nuestro bloque de codigo
  console.log("Condiciòn exitosa");
  console.log("Condiciòn exitosa");
}
let edad = 18; // condiciòn else nos sirve para cuando nuestra condicion no se cumple y entonces ejecuta el  bloque de codigo de else {
}
if (edad > 18){
  console.log("Eres meyor de edad");
}else{
  console.log("Eres menor de edad");
}
let calificacion = 9; //Condiciòn elseif
if (calificacion == 10) {
  console.log("Excelente")
}else if (calificacion > 8) {
  console.log("Muy bien");
}else{
  console.log("Regular");
}

//ciclos
// ciclo for, primero una instrucion  donde iniciara el ciclo,segunda instrucion definimos donde terminara el ciclo, instruccion que se ejecuta despues de cada iteraciòn(repeticiòn)
for (let i = 1; i < 10; i++) {
  //if (i >= 5) break; //break termina el ciclo
  if (i % 2 == 0) continue; //solo imprime los impares//continue terminar la iteraciòn altual para que pase a la siguiente
  console.log(i);
}
//ciclo while
//while (promt()) {
  //console.log("Presiona cancelar para terminar el ciclo");
//}
let i = 1;
while (i <= 10) {
  i++;
  console.log(i);
}//ciclo imprime hasta el 11
// do while Nos asegura que almenos una vez se ejecutara nuestro bloque de codigo
do {
  i++;
  console.log(i);
} while (i <= 10);

// undefined, Nan, null
//undefined;indica que a una variable no se le ha asignado un valor o no se a declarado (tipo de dato)
abasd
typeof abas; //typeof retorna el tipo de dato
let numero;
numero;
typeof numero; // "undefined"
// null objeto especial en js que indica la ausencia de valor
numero = null;
numero;
typeof numero; // "object"
null == undefined; //(true)
null === undefined; //(false)
//NaN not a number
"hola" * 3;//retorna un NaN

/*
  Funciones
*/
// Declaracion de Funciones
function saluda(){
  //code
  console.log("Hola mundo");
}
saluda();

function cuadrado(numero){
  return numero * numero; //con return nos retorna una respuesta
}
function(){ //función anonima
  //code
}

// Que es el scope (alcance)
//colección de variables, funciones y objeto.
/*
  global Scope
  Principio "Menor Acceso"

  Local scope
*/
let nombre = "Miguel";
//global scope
function decir_hola(){
  // local scope
  console.log("Hola" + nombre);
}

decir_hola();

//Cuando usar let, const y var
function mayor_edad(edad){ //var tiene alance  dentro del bloque de la función mas cercana
  if(edad >= 18){
    var resultado = "Eres mayor de edad";
  }else{
    var resultado = "Eres menor de edad";
  }
  console.log(resultado);
}
mayor_edad();
 // Let y const tienen alcance solo dentro del bloque ms cercano

//agurmentos a Funciones
function cuadrado(numero){ // parametro variable que colocamos en la function
  return  numero * numero;
}
cuadrado(2); // el valor que recibe es el argumento

functon sumaTodos(){
  return arguments[0] + arguments[1];
}
console.log(1, 2);

//Funciones anonimas
function executor(function){
  function();
}

function decirHola(){
  console.log("Hola");
}
executor(decirHola);

executor(function(){
  console.log("Hola"); //Function anonima
});

//El contexto
let objecto = {
  demo: function(){
    console.log(this);
  }
}
objeto.demo();

let usuario = {
  nombre: "Miguel",
  apellido: "Jimenez",
  nombreCompleto: function(){
    console.log(this.nombre + ' ' + this.apellido);
  }
}

let executor = {
  function: null,
  execute: function(){
    f();
    this.function = f;
    this.function();
  }
}
usuario.nombreCompleto();
executor.execute(usuario.nombreCompleto);

//Arrow functions

let demo = ()=>{
  console.log("Hola mundo");
}
