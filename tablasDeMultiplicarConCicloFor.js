//codigo para las tablas de multiplicar

let numero = parseInt(prompt("Ingrese número de tabla de multiplicar que desea ver: "));
let inicio = parseInt(prompt("Ingrese el número desde el cual quiere que inicie la tabla: "));
let fin = parseInt(prompt("Ingrese el número limite con el cual quiere que termine la tabla: "));

for (let i = inicio; i <= fin; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
    console.log(`i = ${i}`);//Esta linea muestra el valor de "i" y no es necesaria, por lo que se puede eliminar
}
