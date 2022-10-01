function sumaNotas(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

let n1 = Number(prompt("Inserte primera nota: "));
let n2 = Number(prompt("Inserte segunda nota: "));
let n3 = Number(prompt("Inserte tercera nota: "));
alert(`La nota final es ${Math.round(sumaNotas(n1, n2, n3) * 100) /100}`);
