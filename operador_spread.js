/*
Operador Spread es similar a los parámetros rest, también usa tres puntos ..., pero hace exactamente lo opuesto.
Cuando ...arr es usado en el llamado de una función, “expande” el objeto iterable arr en una lista de argumentos.

Para Math.max (la función nativa Math.max devuelve el número más grande de una lista):
*/
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (spread convierte el array en una lista de argumentos)

//También podemos pasar múltiples iterables de esta manera:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

//Incluso podemos combinar el operador spread con valores normales:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

//Además, el operador spread puede ser usado para combinar arrays:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, luego arr, después 2, después arr2)

/*En los ejemplos de arriba utilizamos un array para demostrar el operador spread, pero cualquier iterable funcionará también.
Por ejemplo, aquí usamos el operador spread para convertir la cadena en un array de caracteres:*/
let str = "Hola";
alert( [...str] ); // H,o,l,a
//El operador spread utiliza internamente iteradores para iterar los elementos, de la misma manera que for..of hace.


/*Resumen
Cuando veamos "..." en el código, son los parámetros rest o el operador spread.

Hay una manera fácil de distinguir entre ellos:

Cuando ... se encuentra al final de los parámetros de una función, son los “parámetros rest” y recogen el resto de la lista de argumentos en un array.
Cuando ... está en el llamado de una función o similar, se llama “operador spread” y expande un array en una lista.

Patrones de uso:
- Los parámetros rest son usados para crear funciones que acepten cualquier número de argumentos.
- El operador spread es usado para pasar un array a funciones que normalmente requieren una lista de muchos argumentos.
  Ambos ayudan a ir entre una lista y un array de parámetros con facilidad.

Todos los argumentos de un llamado a una función están también disponibles en el “viejo” arguments: un objeto símil-array iterable.*/

