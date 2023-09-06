let nombre = "Manuel Blanco";
let edad = 43;
let ocupacion = "Desempleado";

// console.log(`Nombre: ${nombre} \nEdad: ${edad} \nOcupación: ${ocupacion}`);

let colors = ["red", "green", "blue"];

colors.push("black"); // Agregamos "black" al final del array
// console.log(colors);

colors.shift(); // Eliminamos "red" del principio del array
colors[0] = "blue"; // Cambiamos "green" por "blue"
colors[1] = "green"; // Cambiamos "blue" por "green"
// console.log(colors);

colors.unshift("yellow"); // Agregamos "yellow" al principio del array
// console.log(colors);

/* IF, ELSE y SWITCH */
/* Ejercicio #5
Una escuela primaria ofrece diferentes recompensas según la calificación del alumno:

Los estudiantes que obtuvieron una A recibirán un chocolate.
Los estudiantes que obtuvieron una B recibirán una galleta.
Los estudiantes que obtuvieron una C recibirán un caramelo.
Para cualquier otro valor, imprima "No hay recompensa para dar".
Cree una variable denominada grade que almacenará la calificación del estudiante. */

let grade = "D";
switch (grade) {
  case "A":
    console.log("Obtuviste una A, ¡así que aquí tienes un chocolate!");
    break;
  case "B":
    console.log("Obtuviste una B, ¡aquí tienes una galleta para ti!");
    break;
  case "C":
    console.log(
      "Obtuviste una C, hay margen de mejora y ¡aquí está tu caramelo!"
    );
    break;
  default:
    console.log("No hay recompensa para dar");
}
