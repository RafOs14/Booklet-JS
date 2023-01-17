// ACTIVIDAD 3 JUGADORES
// Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. 
// Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

class Jugador {
    constructor(nombre, numero, edad, lesionado) {
        this.nombre = nombre;
        this.numero = numero;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const jugadores = [];

for(let i = 0; i < 5; i++){
    jugadores.push(new Jugador(prompt("Ingrese el nombre del jugador"), prompt("Ingrese el número de camiseta"), prompt("Ingrese la edad del jugador"), prompt("¿Está lesionado?")));
}

for(let i = 0; i < jugadores.length; i++){
    alert(`El jugador ${jugadores[i].nombre} ocupa la posición ${i+1}`);
}

