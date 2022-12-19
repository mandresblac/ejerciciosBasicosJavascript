function clasificarVolumen(valor){
  let volumen;
  switch (valor){
    case 1:
      volumen = "Bajo";
      break;
    case 2:
    case 3:
      volumen = "Intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "Alto";
      break;
    default:
      volumen = "¡Error!"
  }
  return volumen;
};

console.log(clasificarVolumen(7));

