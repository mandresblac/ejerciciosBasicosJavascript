/*let template = document.getElementById("usuario");
let tabla = document.getElementById("tabla");

tabla.appendChild(template.content.cloneNode(true));*/

/*
try{
    let nombre = prompt("Escribe tu nombre: ");
    let apellido = prompt("Escribe tu apellido: ");
    let edad = Number(prompt("Escribe tu nombre: "));

    if(typeof nombre !== "string" || nombre === ""){
        throw "El nombre no puede estar vacio ni tener números";
    }else if (typeof nombre !== "string" || nombre === ""){
        throw "El apellido no puede estar vacio ni tener números";
    }else if(isNaN(edad) || edad === ""){
        throw "Debes introducir un número";
    }
}catch (error){
    alert(`Error: ${error}`)
}*/ 

const comprobarSiEsDefectuosa = () => {
    if (Math.random() < probError){
        return true;
    }else{
        return false;
    }
}

const numPiezas = 10;
const probError = 0.25;

let correctas = 0;
let defectuosas = 0;

for (let index = 1; index <= numPiezas; index++) {
    const esDefectuosa = comprobarSiEsDefectuosa();
    
    try{
        if (esDefectuosa){
            throw `-> Pieza ${index} defectuosa`;
        }else{
            correctas++;
        }
    }catch(error){
        defectuosas++;
    }finally{
        console.log(`Fabricando pieza ${index}`);
    }
}

console.log(`fabricadas: ${numPiezas}`);
console.log(`-> correctas: ${correctas}`);
console.log(`-> defectuosas: ${defectuosas}`);