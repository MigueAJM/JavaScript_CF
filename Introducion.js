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
