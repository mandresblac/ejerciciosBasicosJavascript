/*
Escribe un programa que muestre los números del 1 al 100 sustituyendo los múltiplos de 3 por la palabra "fizz", los multiplos de 5
por la palabre "buzz" y los multiplos de ambos (de 3 y 5) por la palabra "fizzbuzz"
*/

//opcion1

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


//opcion 2 con una funcion
/*
function fizzBuzz() {
  for(let i = 1; i <= 100; i++){
	if (i % 3 === 0 && i % 5 === 0) {
	  console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
	  console.log("fizz");
    }else if (i % 5 === 0) {
	  console.log("buzz");
    }else {
	  console.log(i);
    }
  };
};

//Llamamos a la funcion fizzBuzz()
fizzBuzz();
*/

//Opcion 3
/*
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/

