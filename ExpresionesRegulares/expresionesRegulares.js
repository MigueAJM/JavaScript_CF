//nos permiten trabajar con patrones de busqueda sobre el texto, basada en patrones
//dos alternativas  /Expresión/;  new RegExp()
// Literales, especiales (caracteres especiales (meta caracteres) se agrupan en 5 grupos)
//tipo caracter, las acerciones, agrupamientos/rangos, cuantificadores, unidcode property escapes
/.@./ //Cualquier caracter antes de @ y despues de arroba   ||  regex101.com
/.@./g //bandera g


//Busqueda con expresiones regulares        developer.mozilla.org => Using regular expressions in JavaScript
let texto = "Hola, me llamao miguel y tengo 23 años";
console.log(texto.search(/\d/)); //representa cualquier digito  /\d/ // search retorna la posición
//similar a index of, search recibe una expresin regular y index of  una cadena
// de no encontrar search nos retorna -1
//match retorna un arreglo || matchAll retorna un objeto iterador
console.log(texto.match(/\d/g)); // con la banmdera g retorna todas las instancias encontradas
console.log(texto.match(/\d+/g)); // nos retronara ["23"] sin el simbolo mas seria ["2", "7"]
console.log(texto.match(/(\d+)/g));
let it = texto.matchAll(/\d/g);
for(instancia of it){
  console.log(instancia);
}

//Remplazando patrones
let texto = "codigofacilito es una escuela de programación, codigofacilito es genial";
let nuevoTexto = texto.replace(/codigofacilito/g, "CodigoFacilito"); // sin la bandera g solo se remplazara en la primara instancia
console.log(nuevoTexto);

let texto = "1000 numeros disponibles 4000";
let nuevoTexto = texto.replace(/(\d)(\d{3})/g, "$1, $2");
console.log(nuevoTexto);

let texto = "1000 numeros disponibles 4000";
let nuevoTexto = texto.replace(/(\d)(\d{3})/g, function(match,g1,g2,offset,cadena){
  console.log(match,g1,g2,offset,cadena);
  return g1 + "," + g2;
});
console.log(nuevoTexto);

// Rangos en regex

console.log("abcd".match(/[abcd]/)); // ["a"]
console.log("abcd".match(/abcd/));  //  ["abcd"]
console.log("b".match(/[abcd]/)); //  ["b"]
console.log("b".match(/abcd/)); //  null
console-log("a".match(/a|b/));

let texto = "Hola";
texto.match(/H[ol]a/); // null
// /abcd/ | /a-d/

/*
* \d es igual al rango [0-9] es decir, cualquier digito,
* \w es igual al rango [a-zA-Z0-9], y represente cualquier digito, o cualquier letra o guiones bajos
*   developer.mozilla.org  => Character class
*/
