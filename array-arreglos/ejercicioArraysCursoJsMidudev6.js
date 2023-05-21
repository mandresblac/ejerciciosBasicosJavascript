/*
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]

Si no encuentra la palabra debe devolver [-1, -1]. Usa el siguiente código como punto de partida:
*/


const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
];

function findJavaScript(matrix) {
    let posicion = [];

    for (let i = 0; i < 3; i++) {
        //console.log(matrix[i]);
        if (matrix[0][i] === 'JavaScript' ||
            matrix[1][i] === 'JavaScript' ||
            matrix[2][i] === 'JavaScript') {
            posicion.push(matrix[0][i].indexOf('JavaScript'));
        }
    };

    for (let i = 0; i < matrix.length; i++) {
        //console.log(matrix[i]);
        if (matrix[i][0] === 'JavaScript' ||
            matrix[i][1] === 'JavaScript' ||
            matrix[i][2] === 'JavaScript') {
            posicion.push(matrix[i].indexOf('JavaScript'));
        }
    }

    return posicion;
};

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]
