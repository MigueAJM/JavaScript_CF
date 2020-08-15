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

//El contexto this
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

//arrow functions y el contexto
let tutor = {
  nombre: "Miguel",
  apellido: "JM"
  nombreCompleto: function(){
    setTimeout(function(){ // nos retorna nombre y apellido como undefined
      console.log(this.nombre + " " + this.apellido);
    }, 1000);
}
tutor.nombreCompleto();

let tutor = {
  nombre: "Miguel",
  apellido: "JM"
  nombreCompleto: function(){
    setTimeout(()=>{ //Nos retorna el valor deseado "Miguel JM"
      console.log(this.nombre + " " + this.apellido);
    }, 1000);
}
tutor.nombreCompleto();
/*
  Cada vez que se envie una funcion como argumento de otra función y quieras conservar el valor de this
  utiliza siempre la sintaxis de arrow functions ()=>{}
  no solocionan todos los problemas del contexto
*/

//CALL APPLY y BIND
//ejecutan la funcion de forma inmediata (call and apply)
function executor(function){
  function();
}
let tutor = {
  nombre: "Miguel",
  apellido: "JM"
  nombreCompleto: function(){
    console.log(this.nombre + " " + this.apellido);
  }
}
executor(tutor.nombreCompleto); // nos retorna undefined
// para evitar este problema usamos call
function executor(function){
  function.call(tutor); //tutor pasa como el contexto this
}
let tutor = {
  nombre: "Miguel",
  apellido: "JM"
  nombreCompleto: function(){
    console.log(this.nombre + " " + this.apellido);
  }
}
executor(tutor.nombreCompleto); // retorna Miguel JM

function saluda(nombre){
  console.log("hola " + nombre);
}

saluda.call(window, "Miguel");
// con apply los argumentos se enlistan en arreglos
function saluda(nombre){
  console.log("hola " + nombre);
}

saluda.apply(window, ["Miguel"]);

//Bind nos permite asignar el valor del contexto, pero no manda a llamar la function
function executor(function){
  function();
}
let tutor = {
  nombre: "Miguel",
  apellido: "JM"
  nombreCompleto: function(){
    console.log(this.nombre + " " + this.apellido);
  }
}
executor(tutor.nombreCompleto.bind(tutor)); // con bind especificacamos quien sera this de este argumento

/*
    Arreglos
*/
//Arreglos y sus usos
//Recorrer un arreglo
let numeros = [1,23,12,14,5];
for(i = 0, i < numeros.length; i++){
  console.log(numeros[i];
  let elemento = numeros[i];
}

//MEtodos y operaciones sobre arreglos
let arreglo = ['ruby', 'python' 'java', 'javaScript'];
//forEach(
arreglo.forEach(function(elemento) {
  console.log(elemento);
});
//eliminar ruby con filter genera un arreglo sin el elemento o elementos deseados
arreglo = arreglo.filter(function(el){
  return el != 'ruby';
});
arreglo = arreglo.filter((el)=> el != 'ruby');
//find Buscar elementos dentro del arreglo
let elemento_encontrado = arreglo.find(el => el == 'JavaScript');
console.log(el);
// map generar un nuevo arreglo con una operación definida
let numeros = [2,35,6,20];
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);
//arreglo con cadenas convertidos a numeros
let numeros = ["2","35","6","20"];
let cuadrados = numeros.map(numero => parseInt(numero));
console.log(cuadrados);

/*
* Objetos
*/

//Declarar un objecto JSON
let curso = {
  title: "Curso profesional de javascript",
  duración: 2.2,
  bloque: ["Introducción", "Funciones"],
  inscribir: function(usuario){
    console.log(usuario + "Ahora estas inscrito")
  }
}
console.log(curso.title);
console.log(curso['title']);

console.titulo = "Curso base de JavaScript";
console.log(curso.inscribir("Miguel"));

curso['inscribir'] = function(){};

//Funciones constructoras... Para funciones constructores se recomienda usar mayuscula al iniciar su nombreCompleto
function Curso(){
  this.titulo = "Curso de JavaScript"; // con this definimos la propiedad titulo

  this.inscribir = function(usuario){ // definimos un metodo
    console.log(usuario + "se ha inscrito");
  }
}
// Generar objecto
let cursoJavaScript = new Curso();
cursoJavaScript.inscribir("Miguel");

function Curso(title){
  this.titulo = title; // con this definimos la propiedad titulo

  this.inscribir = function(usuario){ // definimos un metodo
    console.log(usuario + "se ha inscrito");
  }
}
// Generar objecto
let cursoJavaScript = new Curso("Curso profesional de JavaScript");
cursoJavaScript.inscribir("Miguel");

//Clases      en javaScript no existen las clases, ed un lenguaje orientado a prototipos
//con las actualizaciones de javascript se introdujieron las clases, solo es una sintaxis alternativa para los Objetos
class Curso{
  //propiedades y metodos
  constructor(titulo){
    this.titulo = titulo;
  }
  inscribir(usuario){
    console.log(usuario + "se ha registrado");
  }
}
let curso = class{} //class expression

let javaScriptCurso = new Curso("Curso Profesional deJavaScript");
console.log(javaScriptCurso.titulo);

//Constructor
class Curso{
  //se ejecuta el constructor de manera automatica cun¿ando se hace un instancia
  constructor(titulo, duracion, color){ //una clase javascript solo puede tener un constructor
    this.titulo = titulo;
    this.duracion = duracion;
    this.color = color
  }
}

//Herencia
class Player{
  play(){ this.video.play(); }
  duracion(){ return this.video.duracion / 100; }
}
class Vimeo extends Player{
  //play(){ this.video.play(); }
  //duracion(){ return this.video.duracion / 100; }
  open(){ this.redirectToVimeo(this.video); }
}

class YouTube extends Player{
  //play(){ this.video.play(); }
  //duracion(){ return this.video.duracion / 100; }
  open(){ this.redirectToYouTube(this.video); }
}
function User(){
  constructor(nombre){
    this.nombre = usuario;
  }
  saludar(){
    console.log("Hola" + this.nombre);
  }
}

class Admin extends User{
  constructor(nombre){
    super(nombre); // se respeta el codigo de la herencia
  }
  saludar(){
    //console.log("Hola usuario")
    super.saludar();
    console.log("Aqui esta el panel de administración");
  }
}

let admin = new Admin("Miguel");

admin.saludar();
class CustomDate extends Date{}
class Coleccion extends Array{}

//Metodos accesores =>Se utilizan para modifir una propiedad o mostrarla
 //se dividen en dos getter: leer propiedades y setter: modifficar propiedades
class Usuario{
  constructor(nombre){ this._name = nombe; }

  get name(){
    return this.name.chartAt(0).toUpperCase() + this._name.slice(1); // miguel => Miguel
  }

  set name(nombre){
    this._name = nombre;
  }
}
let user = new Usuario("miguel");
user.name = "angel"
console.log(user.name);
// Una propiedad no puede compartir el mismo nombre que los getter y setter

// Metodos estáticos => no necesitan de una instancia
class Usuario{
  constructor(permisos="lectura"){ this.permisos = permisos; }
  static createAdmin(){
    let user = new Usuario("administrador");
    return user;
  }
}
let administrador = Usuario.createAdmin();

//Prototipos =>
// __proto__  los objetos se creaen en base a otros objetos
let user = {nombre: "Miguel"};
user.__proto__;

//Herencia de prototipos
let animal = Object.create(null);
animal.vivo = true;
animal.estaVivo = function(){if(this.vivo) console.log("Sigue vivo");}
let perro = Object.create(animal); //objeto como prototipo
perro.estaVivo(); // Hereda el metodo estavivo del objeto animal
//cadena de prototipos, termina cuando encuentra un objeto con el prototipo nulo
console.log(perro.edad);

//La propiedad del prototype => __proto__
function User(){}
let user = new User();
console.log(user.__proto__);
console.log(User.prototype);
User.prototype.saludar =function(){
  console.log("Hola");
}
user.saludar();

let Miguel = Object.create(user);
Miguel.saludar();

//
function User(){
  User.prototype.saludar =function(){
    console.log("Hola");
}
function Admin(){}
Admin.prototype = new User();
let miguel = new Admin();
miguel.saludar();
