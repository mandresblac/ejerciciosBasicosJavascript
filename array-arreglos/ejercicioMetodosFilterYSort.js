const numeros = [25, 9, 82, 57, 19, 148, 68, 39, 95];

const numerosMayoresA50 = numeros.filter(numero => {
  if(numero > 50) {
	return numero;
  }
})

console.log(numerosMayoresA50); // [82, 57, 148, 68, 95]

// Con el metodo .sort() ordenamos en orden ascendente (de menor a mayor) los numeros mayores a 50
const numerosDeMenorAMayor = numerosMayoresA50.sort((a, b) => a - b);

console.log(numerosDeMenorAMayor);

