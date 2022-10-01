//ARREGLOS (array)
// Es una lista ordenada de elementos de cualquier tipo: números, booleanos, Strings, otros arreglos u objetos.

// Sintaxis
// [1, "Pedro", true, [2, "juann"]]
// Los arreglos se pueden guardar en variables y admiten otros arreglos en su interior, ejemplo:
const array = [1, "Pedro", true, [2, "juan"]]

//OPERACIONES BASICAS DE LOS ARREGLOS:

//Obtener la longitud del arreglos: .length
console.log(array.length) // 4

//Obtener valor de una posicion o indice del arreglo: (las posiciones en los array comienzan a contarse desde 0):  [0]
console.log(array[0]) // 1
console.log(array[1]) // Pedro
console.log(array[2]) // true
console.log(array[3]) //[2, 'Juan']
console.log(array[-3]) // undefined
console.log(array[3][0]) // valor 0 de la posicion 4 del array
console.log(array[3][1]) //juan

//Recorrer un array, (utilizamos el ciclo for)
for(let i=0; i < array.length; i++) {
    console.log(i + " : " + array[i])
  }

//Reemplazar un elemento: array[0] = 200
array[0] = 200
console.log(array)

// Insertar nuevos elementos en un array:
// hay dos formas: 
//  1 -insertando al final del array con .push()
array.push("Maria")
console.log(array)

// 2- Insertarlo en otra posición con .splice() ejemplo:
// .splice(1, 0, "Juan") el primer argumento (1) es la posición en la que quieres insertar el elemento. La segunda posición debe estar en 0. Los demás argumentos son los elementos que deseas insertar en el arreglo, a continuacion otro ejemplo: 
array.splice(1, 0, 435) 
console.log(array)

// Eliminar elementos de un array tambien se usa el metodo .splice() ejemplo:
//.splice(1, 1 ) El método splice recibe uno o dos argumentos,  el priemero es el índice del elemento que quieres eliminar y el segundo la cantidad de elementos a eliminar. Si omites el segundo argumento se eliminarán todos los elementos después del índice que hayas especificado en el primer argumento, a continuacion otro ejemplo:
array.splice(1, 1 )
console.log(array)

//Encontrar la posición de un elemento
//Para encontrar la primera posición en la que aparece un elemento utiliza el método indexOf.
array.indexOf(2)

// Unir los elementos en un string:  .join("caracter para unir los elementos")
console.log(array.join("-"))

// Separar los elementos de un string: .split()
const str = "hola como estan"
str.split(" ")

// imprimir solo los números pares del siguiente arreglo
const nums = [8, 2, 3, 6, 7, 9]
for (let i=0; i < nums.length; i+=1) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i])
  }
}
