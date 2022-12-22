//Definir funcion que permita buscar un contacto en un array de contactos

let contactos = [
  {
    "nombre": "Nora",
    "apellido": "nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programacion"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["casos interesantes", "violín"]
  }
];

function buscarPerfil(nombre, propiedad){
  for(let i = 0; i < contactos.length; i++){
    if(contactos[i]["nombre"] === nombre){
      return contactos[i][propiedad] || "La propiedad no existe.";
    };
  };
  return "El contacto no esta en la lista de contactos."
};

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlock", "numero"));

//accediendo a una propiedad que no existe en el arrelo contactos
console.log(buscarPerfil("Nora", "direccion"));

//accediendo a un contacto que no existe en el arrelo contactos
console.log(buscarPerfil("Bob", "direccion"));

