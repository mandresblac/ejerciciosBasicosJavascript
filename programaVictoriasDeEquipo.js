let victorias = parseInt(prompt("Inserte la cantidad de victorias: "));
let empates = parseInt(prompt("Inserte la cantidad de empates: "));
let puntosTotal = (victorias * 3) + empates;

if(puntosTotal < 28){
    console.log("El equipo esta peor que el año pasado");
}
else if(puntosTotal === 28){
    console.log("El equipo esta igual que el año pasado");
}
else{
    console.log("El equipo esta mejor que el año pasado");
}

