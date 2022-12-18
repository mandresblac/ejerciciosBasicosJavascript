/*
PROXIMO EN EL FILA

En inormatica una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en
orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del
principio de la cola

Defien una funcion llamada proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como
argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo.
La funcion proximoEnLaFila debe retornar el elemento que fue removido.
*/

//Solucion del ejercicio

const proximoEnLaFila = (arreglo, elemento) => {
  arreglo.push(elemento); //Agregamos al final del arreglo
  return arreglo.shift(); //Remueve y retorna el primer elemento eliminado
};


let miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo)); //JSON.stringify sirve para mostrar arreglos en consola

console.log("Durante llamado de la funcion: " + proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));

