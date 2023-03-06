/*
Mostrar cuantos números del 1 al 100 contienen un número 9.
*/

for(let i = 1; i <= 100; i++){
    let numString = i.toString();//.toString() convierte a string la variale "i" que es un tipo number
    if(numString.includes("9")) {
	        console.log(`${numString}`)
	    };
};

/*
 En el codigo anterior primero convertimos la variable "i" en un string y luego con el metodo .includes() de los string, verificamos que el
 numero 9 este incluido en la variable "i"
*/

console.log("");


// AHORA CON EL NÚMERO CERO
for(let i = 1; i <= 100; i++){
    let numString = i.toString();//.toString() convierte a string la variale "i" que es un tipo number
    if(numString.includes("0")) {
	        console.log(`${numString}`)
	    };
};

