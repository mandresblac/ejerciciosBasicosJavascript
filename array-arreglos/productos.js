/*
En este ejemplo hemos creado un arreglo de objetos. Cada objeto representa un producto y una de sus llaves (categories) contiene a
su vez un arreglo. Modifiquemos el programa para imprimir los productos en la consola:
*/

let products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];

for (let i=0; i < products.length; i++) {
  let articulo = products[i];//Almacenamos en la variable articulo cada iteracion que hace i en el arreglo products.
  console.log(articulo.name);//Mostramos el valor de la propiedad name de cada objeto del array products que almacenamos en articulo
  console.log("  Id: " + articulo.id);//Mostramos valor de propiedad id de cada objeto de array products que almacenamos en articulo
  console.log("  Precio: " + articulo.price);//Mostramos valor Precio de cada objeto de array products almacenado en articulo
  console.log("  Categorías: " + articulo.categories.join(", "));//Mostramos valor categorias de cada objeto de array products almacenado en articulo
}

/*
Lo primero que estamos haciendo es iterando por el arreglo de productos. Por cada uno de los productos (recuerda que cada producto
es un objeto) vamos a mostrar el nombre (la llave nombre), después el identificador (la llave id), el precio (la llave price) y las
categorías (la llave categories). Como las categorías están en un arreglo debemos utilizar el método join para convertirlas en una
cadena.
*/
