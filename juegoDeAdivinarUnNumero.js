let numeroPensado = Math.round(Math.random() * 10);//Funcion par obtener un número aleatorio entre 0 y 10
let intentos = 3;//Número de intentos 3
let contador = 1;

while(contador <= intentos){
  let numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 10: "));
  if (numeroPensado === numeroIngresado){
	alert(`Usted ha acerto en el intento ${contador}, el número pensado era ${numeroPensado}`);
    break;
  }
  else{
	alert(`Usted no acerto, el número pensado era ${numeroPensado}`);
  }
  contador++;
}

console.log("FIN");

