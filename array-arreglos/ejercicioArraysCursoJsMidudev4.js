/*
Recibes dos parametros: Una lista de palabras "words" y una palabra "word". Primero, busca el índice de la palabra en
la lista. Después, usa ese índice (que séra un número) y devuelve todas las palabras de "words" que sean más largas
(length) que el número de índice.

Ten en cuenta que la palabra "word" siempre existirá en el array, por lo que no es necesario comprobar si existe o no
*/


function buscaPalabras(words, word) {
  const posicionPalabra = words.indexOf(word);
  console.log(posicionPalabra);

  const palabrasMasLargasQueElIndice = words
  	.filter(palabras => palabras.length > posicionPalabra);

  return palabrasMasLargasQueElIndice;
};

let words = ["avion", "casa", "puerta", "silla", "mesa", "ventana", "nevera"];
console.log(buscaPalabras(words, "ventana"));

