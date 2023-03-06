/*
Mostrar cuantos números del 1 al 100 contienen un número 9.
*/

for(let i = 1; i <= 100; i++){
  let numString = i.toString();//El metodo .toString() convierte a string la variale "i" que es un tipo number
  if(numString.includes("9")) {
	console.log(`${numString}`)
  };
};


/*
 En el codigo anterior primero convertimos la variable "i" en un string y luego con el metodo .includes() de los string, verificamos que el
 numero 9 este incluido en la variable "i"
*/

console.log("");

// Otra forma es utilizando el constructor String()
for(let i = 1; i <= 100; i++){
  let numString = String(i);//Usamos el constructor String() para convertir la variable "i" que es un number, a un string
  if(numString.includes("0")) {
	console.log(`${numString}, Contiene un 0`)
  };
};

