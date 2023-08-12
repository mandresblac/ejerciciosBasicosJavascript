const personas = [
    {name: "midu", age: 16},
    {name: "juan", age: 17},
    {name: "pedro", age: 19}
];
personas.some((persona) => {
  return persona.age > 18
});


