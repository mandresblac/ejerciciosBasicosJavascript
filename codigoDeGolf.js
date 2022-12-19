/*
En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes que se espera que
haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que tan por encima o por debajo del par estén tus golpes.

Tu funcion tomará los argumentos par(que es el promedio de los golpes esperados) y golpes (que es el número
de golpes que en verdad realizo el golfista que esta jugando en ese hoyo especifico).

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad:

Golpes              Retornar
----------------------------
1                 "Hole-in-one!"
<= par - 2        "Eagle"
par - 1           "Birdie"
par               "Par"
par + 1           "Bogey"
par + 2           "Double Bogey"
>= par + 3        "Go Home!"

Par y golpes siempre serán numéricos y positivos

*/


function puntajeDeGolf(par, golpes){
  if (golpes === 1){
    return "Hole-in-one!"
  }else if (golpes <= par - 2){
    return "Eagle";
  }else if(golpes === par - 1){
    return "Birdie";
  }else if(golpes === par){
    return "Par";
  }else if(golpes === par + 1){
    return "Bogey";
  }else if(golpes === par + 2){
    return "Double Bogey";
  }else if(golpes >= par + 3){
    return "Go Home!";
  }
};

console.log(puntajeDeGolf(4, 1));
console.log(puntajeDeGolf(4, 2));
console.log(puntajeDeGolf(4, 3));
console.log(puntajeDeGolf(4, 4));
console.log(puntajeDeGolf(4, 5));
console.log(puntajeDeGolf(4, 6));
console.log(puntajeDeGolf(4, 7));

