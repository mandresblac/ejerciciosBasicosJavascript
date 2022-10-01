let edad = parseInt(prompt("¿Cuál es tu edad?"));


if (edad >= 18){
    let tieneLicencia = prompt("¿Tienes licencia? Responde S o N");
    if (tieneLicencia === "S"){
        console.log("Puedes conducir" );
    } 
    else{
        console.log("No puedes conducir");
    }
}
else{
    console.log("No puedes conducir");
}