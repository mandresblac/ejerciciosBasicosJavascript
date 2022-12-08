//Arreglos de temas
const animales = ["perro", "gato", "vaca", "elefante", "leon"];
const paises = ["españa", "alemania", "colombia", "argentina", "mexico"];
const frutas = ["manzana", "naranja", "banano", "piña", "cereza"];
const colores = ["azul", "rojo", "verde", "blanco", "amarillo"];

//selects
const animal = document.querySelector("#animal");
const pais = document.querySelector("#pais");
const fruta = document.querySelector("#fruta");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");
//Boton
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  mostrarPalabra();
});

function mostrarPalabra() {
  if (animal) {
    document.querySelector("#resultado").innerHTML = palabraAleatorio(animales);
    document.querySelector("#resultado").style.display = "block";
  } else if (pais) {
    document.querySelector("#resultado").innerHTML = palabraAleatorio(paises);
    document.querySelector("#resultado").style.display = "block";
  } else if (fruta) {
    document.querySelector("#resultado").innerHTML = palabraAleatorio(frutas);
    document.querySelector("#resultado").style.display = "block";
  } else {
    document.querySelector("#resultado").innerHTML = palabraAleatorio(colores);
    document.querySelector("#resultado").style.display = "block";
  }
}

//Funcion que recibe por parámetro un array (puede ser animales, países, frutas, colores) y devuelve aleatoriamente cualquier elemento dentro del array
function palabraAleatorio(array) {
  //Operación para hallar el número aleatorio
  const palabra = array[Math.floor(Math.random() * array.length)];
  return palabra;
}
