const tablaMultiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroMultiplicar = Number(prompt("¿Que tabla de multipilcar quieres?"));

tablaMultiplicar.forEach(numero => {
    let resultado = numero * numeroMultiplicar;
    let mensaje = `${numeroMultiplicar } x ${numero} = ${resultado}`;
    console.log(mensaje);
});