// Como definir cadenas existen dos versiones de las cadenas
//primitivo ""  ''
let nombre = "migue";
console.log(nombre.length);
//objeto
let name = new String("Migue");
console.log(typeof nombre);
console.log(typeof name);

//    ----  Cuarsión de tipos ----


// caracteres especiales
// escaping => identificación de caracteres especiales
console.log("Migue dijo: \"Hola\"");

//Concatenación e interpretación
console.log("Hola" + " mundo");
let a = "Hola";
let b = "Mundo";
console.log(a.concact(b));
//template litrals => template string
let nombre = "Migue";
let template = `Hola ${nombre}, ¿Como estäs?`;
console.log(template);

//1-9 => 0n
//11-12 => 11 12
let mes = 3;
console.log(mes.padStart(2,"0"));
let mes = prompt("Ingresa mes de nacimiento");
if(mes<10){
   mes = `0${mes}`;
}
console.log(mes);
