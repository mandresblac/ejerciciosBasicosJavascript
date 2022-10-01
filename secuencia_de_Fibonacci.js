/* Una secuencia de Fibonacci se define como un conjunto de números, de forma que cada número es la suma de los dos números anteriores, empezando por 0 y 1.  */

let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

