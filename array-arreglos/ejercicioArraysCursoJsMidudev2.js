/*
Crear un afunción que reciba un array de palabras y devuekva "true" si todas las palabras terminan con la letra "a"
y "false" si al menos una palabra no termina con la letra "a"
 */

function acabaEnA(words) {
  return words.every(palabras => palabras.endsWith("a"));
};

let palabras1 = ["puerta", "arandela", "camiseta"];
console.log(acabaEnA(palabras1));

let palabras2 = ["puerta", "arandela", "camiseta", "ventilador"];
console.log(acabaEnA(palabras2));

