//Destructuracion

//Ejercicio 1
const numeros = [1, 2, 3, 4];
let [one, two, three, four] = numeros;
console.log(one, two, three, four);

//Ejercicio 2
const persona = {
    nombre: "Manuel",
    apellido: "Blanco",
    edad: 35
}
let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);
