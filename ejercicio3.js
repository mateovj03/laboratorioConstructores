function Estudiante(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
    this.aprobado = function() {
        if (this.nota >= 3) {
            return true;
        } else {
            return false;
        }
    }
    this.mostrarResultado = function() {
        if (this.aprobado()) {
            return `El estudiante aprobo`;
        } else {
            return `El estudiante reprobo`;
        }
    }
}

const estudiante1 = new Estudiante("Mateo", 15, 4.5);
const estudiante2 = new Estudiante("Isabella", 14, 3.8);
const estudiante3 = new Estudiante("Santiago", 17, 2.9);
const estudiante4 = new Estudiante("Valeria", 16, 1.7);

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());