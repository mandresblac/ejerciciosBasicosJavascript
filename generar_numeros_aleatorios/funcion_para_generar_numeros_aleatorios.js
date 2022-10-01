function numeroAleatorio(min, max){
  //Operación para hallar el número aleatorio
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

//Si se quiere los nombres de las variables min y max se pueden reemplazar por los nombres inicio(start) y fin(end) respectivamente
let min = parseInt(prompt("valor minimo: "));
let max = parseInt(prompt("valor maximo: "));

alert(numeroAleatorio(min, max));

/**/
