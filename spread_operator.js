const numeros = [1, 2, 3];

function sumar(x, y, z){
  return x + y + z;
};

console.log(numeros[0] + numeros[1] + numeros[2]);
console.log(sumar(...numeros));

