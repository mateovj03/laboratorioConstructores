const prompt = require('prompt-sync')();

function Vehiculo (marca, modelo, color, pais, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.pais = pais;
    this.precio = precio;

    this.mostrarMarcaModelo = function (){
        return `La marca del vehiculo es: ${this.marca} y el modelo es: ${this.modelo}`;
    }

    this.cambioColor = function (){
        this.color = prompt("Escriba el nuevo color del vehiculo: ");
        return `El nuevo color del vehiculo es ${this.color}`;
    }

    this.vehiculoDeLujo = function (){
        if(this.precio >=100000000){
            return `El vehiculo es de lujo`;
        }else{
            return `El vehiculo no es de lujo`;
        }
    }

}

console.log("Ingrese la informacion de 3 vehiculos: ");
const vehiculo1 = new Vehiculo(marca = prompt("Marca: "), modelo = prompt("Modelo: "), color = prompt("Color: "), pais = prompt("pais: "), precio = prompt("precio: "));
console.log("///////////////////////////////////");
const vehiculo2 = new Vehiculo(marca = prompt("Marca: "), modelo = prompt("Modelo: "), color = prompt("Color: "), pais = prompt("pais: "), precio = prompt("precio: "));
console.log("///////////////////////////////////");
const vehiculo3 = new Vehiculo(marca = prompt("Marca: "), modelo = prompt("Modelo: "), color = prompt("Color: "), pais = prompt("pais: "), precio = prompt("precio: "));
console.log("///////////////////////////////////");
console.log(vehiculo1.mostrarMarcaModelo());
console.log("///////////////////////////////////");
console.log(vehiculo1.cambioColor());
console.log("///////////////////////////////////");
console.log(vehiculo1.vehiculoDeLujo())
