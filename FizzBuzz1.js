/*
Escribe un programa que muestre los números del 1 al 100 sustituyendo los multiplos de 3 por la palabra "Fizz", los multiplos de 5 por la palabra "Buzz" y los multiplos de ambos (de 3 y 5) por la palabra "FizzBuzz
*/

// Opción 1

for (let i= 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
	console.log(`${i} FizzBuzz`);
  }else if(i % 3 === 0){
	console.log(`${i} Fizz`);
  }else if(i % 5 === 0){
	console.log(`${i} Buzz`);
  }else{
	console.log(i);
  }
};



// Opción 2
/*
for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} Fizz Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }else{
  	console.log(i);
  }
};
*/

