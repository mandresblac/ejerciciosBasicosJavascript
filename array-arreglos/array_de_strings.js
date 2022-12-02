function palabrasAFrase(array) {
  // La función llamada  recibe como argumento un arreglo de 'string' y debe devolver un 'string'
  // armando la frase
  // Ej:
  // palabrasAFrase(['Dobby', 'loves', 'socks!]) debe retornar 'Dobby loves socks!'
  // sin espacios ni antes ni después es decir así no => " Dobby loves socks! "
  // Tu código aca:
  const arreglo = [];
  arreglo.push(array);
  let cadena = arreglo.toString();
  return cadena.replaceAll(",", " ");
}

console.log(palabrasAFrase(['Dobby', 'loves', 'socks!']));

