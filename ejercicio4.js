function Libro (nombre, autor, genero, prestado) {
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.prestado = false;
    this.prestar = function() {
        if (this.prestado) {
            return `El libro ya está prestado`;
        } else {
            this.prestado = true;
            return `Se ha prestado el libro`;
        }
    }
    this.devolver = function() {
        if (this.prestado) {
            this.prestado = false;
            return `Se ha devuelto el libro`;
        } else {
            return `El libro no estaba prestado`;
        }
    }
}

const libro1 = new Libro("Soy el numero 4", "Pittacus Lore", "Ciencia ficción");

console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro1.devolver());
console.log(libro1.prestar());
