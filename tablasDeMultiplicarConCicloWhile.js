

let numero = parseInt(prompt("Ingrese número de tabla de multiplicar que desea ver: "));
let inicio = parseInt(prompt("Ingrese el número desde el cual quiere que inicie la tabla: "));
let fin = parseInt(prompt("Ingrese el número limite con el cual quiere que termine la tabla: "));

while(inicio <= fin){
    console.log(`${numero} x ${inicio} = ${numero * inicio}`);
    inicio++;
}
