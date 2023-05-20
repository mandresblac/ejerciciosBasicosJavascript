/*
Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la
lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo
a la suma total. Usa el bucle que quieras para solucionarlo.
*/


function sumarPares(numeros) {

	let suma = 0;

  	numeros.forEach(elemento => {
		if(elemento % 2 === 0){
			suma += elemento;
      		};
  	});

	return suma;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

//Llamada a la función
console.log(sumarPares(numbers));

