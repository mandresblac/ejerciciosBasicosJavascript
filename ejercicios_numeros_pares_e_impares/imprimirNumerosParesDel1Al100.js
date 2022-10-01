//Usando el bucle while, imprime todos los números pares del 1 al 100 y al final imprime la palabra "FIN".

//Opcion 1
let contador = 1;

while(contador <= 100){
    if(contador % 2 === 0){
        console.log(contador);
    }
    contador++
}

console.log("FIN");

//Opcion 2
let contador = 2;

while(contador <= 100){
    console.log(contador);
    contador += 2; // incremento de dos en dos
}

console.log("FIN");

