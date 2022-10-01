//Funcions CALLBACK
//callback seria llamar devuelta
//URL video: https://www.youtube.com/watch?v=zQVnDW8SaA0

function primero(segundo){
  setTimeout(function(){
	console.log("PRIMERO");
	segundo();
  }, 2000);
}

function segundo(){
  console.log("SEGUNDO");
}

primero(segundo);

