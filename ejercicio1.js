function Computadora(marca, procesador, ram, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const computadora1 = new Computadora("Lenovo", "Intel i5", "16 GB", 1500000);
const computadora2 = new Computadora("HP", "AMD Ryzen 5", "8 GB", 1200000);
const computadora3 = new Computadora("Dell", "Intel i7", "32 GB", 3000000);

console.log(computadora1);
console.log(computadora2);
console.log(computadora3);