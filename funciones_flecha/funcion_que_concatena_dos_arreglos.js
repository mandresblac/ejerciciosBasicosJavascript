const concatenarArreglos1 = (arreglo1, arreglo2) => {
  return arreglo1.concat(arreglo2);
};

console.log(concatenarArreglos1([1, 2], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]



//La anterior funcion tambie se puede escribir de una manera mas consisa y abreviada, así:
const concatenarArreglos2 = (arreglo1, arreglo2) => arreglo1.concat(arreglo2);
console.log(concatenarArreglos2([1, 2], [3, 4, 5]));

