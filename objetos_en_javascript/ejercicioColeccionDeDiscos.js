/*
Tenemos un objeto que representa parte de una colección de albume musicales.

Cada álbum tiwnw un número de identificación único (id) asociado a otras propiedades.

No todos los albumes tienen la información completa.
*/

let coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin", "Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold",
    artista: "Bee Gees",
    canciones: ["Stayin", "Alive"]
  },
};

/*
Define una funcion actualizarDiscos que tome los siguiente parametros:
- Discos (el objeto que representa la coleccion de discos)
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la funcion implementando las siguientes reglas para modificar el objeto pasado a la
funcion:

- Si "valor" es una cadena vacia, elimina la propiedad del album correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el album no tienen una propiedad
llamada "canciones", crea un arreglo vacio y agrega "valor" a ese arreglo.

- Si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones", asigna el valor del parametro
"valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar este valor.
*/

let coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin", "Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold",
    artista: "Bee Gees",
    canciones: ["Stayin", "Alive"]
  },
};

function actualizarDiscos(discos, id, propiedad, valor){
  if(valor === ""){
    delete discos[id][propiedad];
  }else if(propiedad === "canciones"){
    discos[id][propiedad] = discos [id][propiedad] || [];
    discos[id][propiedad].push(valor);
  }else {
    discos[id][propiedad] = valor;
  }
};

console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA")
console.log(coleccionDeDiscos[5439].artista);

