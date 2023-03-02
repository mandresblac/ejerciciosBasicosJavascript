// FUNCION isNaN()

/*
Para validad que un dato sea de tipo number (número) y no tipo string (texto) utilizamos la función isNan()
asi: isNaN(dato)
*/

// Ejemplo con el condicional if else:

let dato = Number(prompt("Inserte un número "));
if(isNaN(dato)) {
  alert("El valor insertado es una letra no un número");
} else {
  alert(`El número que insertaste es: ${dato}`);
};


// Ejemplo con el operador ternario:

let dato = Number(prompt("Inserte un número "));
(isNaN(dato))
? alert("El valor insertado es una letra no un número")
: alert(`El número que insertaste es: ${dato}`)



/*
Para Validar que un dato sea de tipo string (texto) y no tipo number (número) utilizamos la funcion isNaN()
negandola (!), asi: !isNaN(dato)
*/

// Ejemplo con un condicional if else:

let dato = prompt("Inserte una letra: ")
if (!isNaN(dato)) {
	alert("El valor insertado no es una letra sino un número")
} else {
	alert(`La letra que insertaste es: ${dato}`)
}

// Ejemplo con el operador ternario:

let dato = prompt("Inserte una letra: ");
(!isNaN(dato))
  ? alert("El valor insertado es un número no una letra")
  : alert(`La tetra que insertaste es: ${dato}`)`

