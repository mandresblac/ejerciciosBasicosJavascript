/* 7 metodos de array que debes conocer */

const posts = [
  {
    id: 1,
    title: "Mi primer post",
    image: "https://img.com/1",
    tags: ["javascript", "webdevelopment"],
  },
  {
    id: 2,
    title: "Mi pexperiencia con React",
    image: "https://img.com/2",
    tags: ["javascript", "webdevelopment", "react"],
  },
  {
    id: 3,
    title: "Por qué dejé Angular",
    image: "https://img.com/3",
    tags: ["javascript", "webdevelopment", "angular"],
  },
];

// metodo find()
// Recorre el array y retorna la primera coincidencia del elemento que se busca.
const find = posts.find((post) => post.title === "Por qué dejé Angular");
console.log(find);

// metodo some()
// Itera el array y retorna un booleano  (true o false) si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.
const some = posts.some((post) => post.id === 4);
const some2 = posts.some((post) => post.id === 1);
console.log(some); // false
console.log(some2); // true

// metodo includes()
// Determina si un array incluye un determinado elemento y retorna un booleano (true o false) según corresponda.
const frutas = ["Manzana", "Piña", "Fresa", "Naranja", "Banano"];

console.log(frutas.includes("Naranja")); // true
console.log(frutas.includes("Uva")); // true

// metodo every()
// Es similar al some(), ya que itera el array y retorna un booleano (true o false). Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
const every = posts.every((post) => post.tags.includes("javascript"));
const every2 = posts.every((post) => post.tags.includes("react"));
console.log(every); // true
console.log(every2); // false

// metodo map()
// Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
const titles = posts.map((post) => post.title); // Arrat de titles
console.log(titles);

// metodo filter()
// Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
const filtro = posts.filter((post) => post.tags.includes("angular"));
console.log(filtro);

// metodo reduce()
// Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
const reduce = posts.reduce((allTags, post) => {
  return [...allTags, ...post.tags];
}, []);
console.log(reduce);
