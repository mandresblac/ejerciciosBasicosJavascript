// Array o arreglo
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["Juan", "Luis", "Pedro", "Miguel", "Andrea"],
    ["Enero", "Febrero", "Marzo"]
]

//Obtener la longitud del arreglos: .length
console.log(arr.length)

//Obtener valor de una posicion o indice del arreglo: (las posiciones en los array comienzan a contarse desde 0):  [0]
console.log(arr[0])
console.log(arr[3][2])
console.log(arr[4][1])
console.log()

//Recorrer un array
for(let i=0; i < arr.length; i+=1) {
    console.log(i + " : " + arr[i])
}

//reemplazar un elemento
arr[3][2] = "Andrea"
console.log(arr[3])
console.log()

//Inserta elementos al final del array
arr.push("Claudia")
console.log(arr)
console.log()

//Insertar elelmento en otra posición
arr.splice(2, 0, ["Perro"])
arr.splice(2, 0, ["Gato"])
console.log(arr)
console.log()

//Eliminar elementos de un array tambien se usa el metodo .splice() 
arr.splice(2, 1)
console.log(arr)
console.log()

//Encontrar la posición de un elemento
//Para encontrar la primera posición en la que aparece un elemento utiliza el método indexOf.
arr.indexOf([1, 2, 3])


//Recorrer un string
let saludo = "Hola mundo, como estan?"
console.log("La variable saludo tiene " + saludo.length + " caracteres")

// Unir los elementos en un string:  .join("caracter para unir los elementos")
console.log(arr.join("-"))

// Separar los elementos de un string: .split()
console.log(saludo)
saludo.split("  ")
