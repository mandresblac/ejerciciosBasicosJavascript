// Opción 1
while(true){
    let respuesta = parseInt(prompt("Cuanto es 2 + 2: "));
    if(respuesta === 4){
        console.info("Felicitaciones 2 + 2 es 4");
        break;
    }else{
        alert("Mal, volvemos a empezar");
    }
}

// Opción 2
let respuesta;

while (respuesta != "4") {
  let pregunta = prompt("Cuanto es 2 + 2: ");
  respuesta = pregunta;
}
