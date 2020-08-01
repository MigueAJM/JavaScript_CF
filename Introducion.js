/*
  Introducción
*/
//  Recibir datos
promt();
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
