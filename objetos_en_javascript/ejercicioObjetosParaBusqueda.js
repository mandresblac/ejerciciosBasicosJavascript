function buscarElementoQuimico(simbolo){
  let simbolosQuimicos = {
	"Al":"Aluminio",
    "S": "Azufre",
    "Cl": "Cloro",
    "He": "Helio",
    "B": "Boro",
    "Li": "Litio"
  };

  return simbolosQuimicos[simbolo];
};

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

