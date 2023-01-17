// ACTIVIDAD 4 BUSCAR JUGADOR
// Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de 
// jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. 
// La función retorna el jugador que coincide con el nombre. Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, 
// e informar sobre el resultado de cada búsqueda.

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

function buscarJugador(equipo, jugador){
    return equipo.find(e => {
        return e.nombre == jugador;
    })
}

for(let i = 0; i < 3; i++){
    let jugador = prompt("Ingrese el nombre del jugador a buscar");
    let encontrado = buscarJugador(jugadores, jugador);
    if(encontrado){
        alert(`El jugador ${encontrado.nombre} está en el equipo`);
    } else {
        alert(`El jugador ${jugador} no está en el equipo`);
    }
}
