const users = [
  { id: 26, name: "Pedro" },
  { id: 12, name: "Juan" },
  { id: 7, name: "Maria" },
  { id: 18, name: "Luis" },
  { id: 2, name: "Diana" },
  { id: 5, name: "Laura" }
];

// Organiza por id de menor a mayor
const menorAMayor = users.sort((a, b) => a.id - b.id);
console.log(menorAMayor);

// Organiza por id de mayor a menor
const mayorAMenor = users.sort((a, b) => b.id - a.id);
console.log(mayorAMenor);

