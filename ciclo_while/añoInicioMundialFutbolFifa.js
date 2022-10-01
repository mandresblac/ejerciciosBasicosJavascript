//Programa que nos calcule los años en los que hubo mundial de futbol de la FIFA desde el año 1930
//
alert("Programa que calcula los años en los que hubo mundial de futbol de la FIFA desde 1930");

let limite = parseInt(prompt("Ingrese año limite para calcular: "));
let inicioMundial = 1930;

while(inicioMundial <= limite){
    console.log(`Hubo mundial de la FIFA en el año ${inicioMundial}`);
    inicioMundial += 4;
}

console.log("Fin");
