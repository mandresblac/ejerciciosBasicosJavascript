/* EJERCIIO 1
Crea un programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales. */

function compararNumeros(a, b) {
    if(a === b) {
        return `${a} y ${b} son iguales`
    }
    else if (a > b) {
        return `${a} es mayor que ${b}`
    } else {
        return `${b} es mayor que ${a}`
    }
};

console.log(compararNumeros(9, 10));