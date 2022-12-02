function fakeBinary2(string) {
  // La funcion llamada 'fakeBinary' recibe como argumento un string con numeros
  // y debe devolver un string en donde se remplaza los numeros menores de 5 con '0'
  // y los numeros iguales o mayores a 5 con '1'
  // Por ej:
  // fakeBinary2('5627') devuelve "1101"
  // fakeBinary("729") devuelve "101"
  // Tu código aca:
    let cadena = string.split("");
    for(let i = 0; i < cadena.length; i++){
        (cadena[i] < 5) ? console.log("0"): console.log("1");
    }
}

fakeBinary2('729');

