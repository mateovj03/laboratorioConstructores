function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy un ${this.especie} con un peso de ${this.peso} kg`;
    }
}

const perro = new Mascota("Galo", "perro", 5, 10);
const gato = new Mascota("Mia", "gato", 4, 3);
const pollito = new Mascota("Sunny", "pollito", 1, 0.1);

console.log(perro.presentarse());
console.log(gato.presentarse());
console.log(pollito.presentarse());