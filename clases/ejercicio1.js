//Creamos la clase MedioDeTranporte
class MedioDeTransporte{
    //Metodo constructor
    constructor(nombre, tipo, peso, velocidad, capacidadCarga){
        this.nombre = nombre;
        this.tipo = tipo;
        this.peso = peso;
        this.velocidad = velocidad;
        this.capacidadCarga = capacidadCarga;
    }

    acelerar(){
        return `El ${this.nombre} acelera a una velocidad maxima de ${this.velocidad}`;
    }

    tiempo(distancia){
        let resultado = distancia / this.velocidad;
        return `El ${this.nombre} a una velocidad de ${this.velocidad} Km/h recorre ${distancia} km en ${Math.floor(resultado)} horas`
    }
}

//Instanciamos primer objeto  llamado avion de la clase MedioDeTranporte
let avion  = new MedioDeTransporte("Avion de pasajeros", "Aereo", "250 Toneladas", 500, "180 personas");

//Instanciamos segundo objeto llamado barco de la clase MedioDeTranporte
let barco = new MedioDeTransporte("Crucero", "Maritimo", "6000 Toneladas", 37.04, "150 personas");

//Instanciamos tercer objeto llamado tren de la clase MedioDeTranporte
let tren = new MedioDeTransporte("Tren de pasajeros", "Terrestre", "150 Toneladas", 80, "120 personas");

tren.tiempo(200);

