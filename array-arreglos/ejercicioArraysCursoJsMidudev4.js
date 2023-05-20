/*
Recibes una lista de números. Debes ordenar los números de mayor a menor según su valor absoluto. Eso quiere decir que
los números negativos pierden el signo y se ordenan como si fueran positivos.

Por ejemplo, si recibes [5, -10, -2, -25, -7] deberias devolver [-2, 5, 7, -10, -25].

Puedes usar el metodo Math.abs(num) par obtener el valor absoluto de un número.
 */

function sortAbsoluteNumbers(numbers) {
  return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
}

let numbers = [5, -10, -2, -25, 7]

console.log(sortAbsoluteNumbers(numbers));

