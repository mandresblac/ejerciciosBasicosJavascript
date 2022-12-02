//Funcion para gerar el factorial de un número

/* El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n, es decir
, el factorial de 7 seria: 1*1= 1, 1*2= 2, 2*3= 6, 6*4 = 24, 24*5 = 120, 120*6 = 720, 720*7 = 5040  y si sucesivamente */

/* La función factorial se representa con un signo de exclamación “!” detrás de un número. Esta exclamación quiere decir que hay
   que multiplicar todos los números enteros positivos que hay entre ese número y el 1, por ejemplo:

   7! = 1x2x3x4x5x6x7 = 5040
*/

const factorial = n => {
  //Condicion para validar si el numero insertado es menor o igual a 0
  if(n <= 0){
	return "No se puede generar factorial si el número es menor o igual a cero";
  };

  let res = 1;
  for (let i = 1; i <= n; i++){
	res *= i;
  }
  return res;
};

console.log(`Resultado: ${factorial(5)}`);  //120

