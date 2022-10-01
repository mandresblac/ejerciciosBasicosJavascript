alert("operaciones basicas con condicional SWITCH");|
let n1 = parseInt(prompt("Inserte primer número: "))
let n2 = parseInt(prompt("Inserte segundo número: "))
let seleccion = parseInt(prompt("Seleccione la operacion que desea realizar: \n1. Suma \n2. Resta \n3. Multiplicacion \n4. Division"));

switch(seleccion){
    case 1:
           suma = n1 + n2;
           alert(`${n1} + ${n2} = ${suma}`);
           break;
    case 2:
           resta = n1 - n2;
           alert(`${n1} - ${n2} = ${resta}`);
           break;
    case 3:
           multiplica = n1 * n2;
           alert(`${n1} x ${n2} = ${multiplica}`);
           break;
    case 4:
           divide = n1 / n2;
           alert(`${n1} / ${n2} = ${divide}`);
           break;
	default:
           alert("Error, ¡Opcion incorrecta!");
}

