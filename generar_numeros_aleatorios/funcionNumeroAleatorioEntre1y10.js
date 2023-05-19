
//Funcion que devuelve un número aleatorio entre 1 y 10

function getRandomNumber() {
    const random = Math.random(); //Número aleatorio entre 0 y 1 (1 no incluido)
    const multiplied = random * 10; //multiplicamos por 10 el numero aleatorio
    const rounded = Math.floor(multiplied); //Redondeamos número aleatorio
    const result = rounded + 1; //sumamos 1 para llegar al 10

    return result;
};

console.log(getRandomNumber());

