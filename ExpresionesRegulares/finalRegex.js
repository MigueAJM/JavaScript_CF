/*
* Ejercicio final de regex<
*/
let text = "Visita https://codigofacilito.com";
console.log(text.replace(/(https?:\/(\S+\.)?\S+(\.\S+)(\.\S+)?)/, "<a href='$1'>$1</a>"));
