//Ejemplo 1
// Iterar sobre un arreglo para sumar todos sus elementos
let miArreglo = [4, 6, 8, 2];
let total = 0;

for(let i = 0; i < miArreglo.length; i++){
  total += miArreglo[i];
};

console.log(total);


//Ejemplo 2
//Convertir elementos de un arreglo en Mayusculas.
let lenguajesDeProgramacion = ["javascript", "Python", "Java", "C++"];

for(let i = 0; i < lenguajesDeProgramacion.length; i++){
  console.log(lenguajesDeProgramacion[i].toUpperCase());//Convertimos a mayuculas
};


//Ejemplo 3
//Funcion que cuenta los núemros pares en un arreglo
function contarNumerosPares(arreglo){
  let total = 0;

  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] % 2 === 0){
      total++;
    };
  };

  return total;
};

console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6 ,3]));

