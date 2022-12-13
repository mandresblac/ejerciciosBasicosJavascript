/*
Concatena las cadenas para crear una cadena que muestre un mensaje.
Puedes cambiar los valores de las variables.

Por ejemplo: El perro negro corrió rápidamente a la tienda.
			 La bicicleta pequeña voló a la tienda lentamente.
*/


//Primera frase
let miSustantivo1 = "perro";
let miAdjetivo1 = "negro";
let miVerbo1 = "corrió";
let miAdverbio1 = "rápidamente";

let palabrasEnBlanco1 = `El ${miSustantivo1} ${miAdjetivo1} ${miVerbo1} ${miAdverbio1} a la tienda.`;

console.log(palabrasEnBlanco1);


//Segunda frase
let miSustantivo2 = "bicicleta";
let miAdjetivo2 = "pequeña";
let miVerbo2 = "voló";
let miAdverbio2 = "lentamente";

let palabrasEnBlanco2 = "La" + " " +  miSustantivo2 + " " + miAdjetivo2 + " " + miVerbo2 + " " + "a la tienda" + " " + miAdverbio2 + "." ;

console.log(palabrasEnBlanco2);

