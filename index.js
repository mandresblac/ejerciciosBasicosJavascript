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
/* switch (grade) {
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
} */

/* Ejercicio #7
Escribe una función llamada calculateSquare() que se use para calcular el área y el perímetro de una forma cuadrada.

La función acepta un parámetro: el side del cuadrado.

La fórmula para calcular el área es side * side y la fórmula para calcular el perímetro es 4 * side. */

const calculateSquare = (side) => {
  let area = side * side;
  let perímetro = 4 * side;
  return `El lado del caudrado es ${side} \nEl área del cuadrado es ${area} \nEl perímetro del cuadrado es ${perímetro}`;
};

// console.log(calculateSquare(8));

/* Ejercicio #8
Cree un person objeto con las siguientes propiedades:

name- el nombre de la persona
age- la edad de la persona
greet()- una función para saludar a otra persona
Dentro de la greet()función, presenta a la persona, especificando el nombre y la edad. */

const person = {
  name: "Alex",
  age: 22,
  greet: function () {
    return `Hello! My name is ${this.name} and I'm ${this.age} years old.`;
  },
};

console.log(person.greet());
