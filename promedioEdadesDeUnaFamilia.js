//Programa que devuelve el promedio de edades de una familia

let numeroDeMiembros = Number(prompt("Ingrese la cantidad de miembros que tiene sufamilia: "));
let contador = 1;
let totalEdades = 0;

while(contador <= numeroDeMiembros){
    let edad =  parseInt(prompt("Ingrese la edad del familiar: "));
    totalEdades += edad;//Se hace la sumatoria de las edades de cadad miembro de la famili
    contador++;
}

let mediaEdades = totalEdades / numeroDeMiembros;
console.log(`El promedio de las edades del familia es: ${mediaEdades}`);
