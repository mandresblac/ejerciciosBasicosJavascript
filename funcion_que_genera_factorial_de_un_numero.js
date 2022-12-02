//Funcion para gerar el factorial de un número
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

