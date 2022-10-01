let cal = Number(prompt("Ingrese su nota: "));
if (cal <= 1.9){
    calificacion = "Insuficiente";
}else if(cal >= 2 && cal <= 2.9){
    calificacion = "Deficiente";
}else if(cal >= 3 && cal <= 3.5){
    calificacion = "Aceptable";
}else if(cal >= 3.6 && cal <= 4.5){
    calificacion = "Bueno";
}else{
    calificacion = "Excelente";
}

alert(`He obtenido un ${calificacion}`);
