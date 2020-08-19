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
