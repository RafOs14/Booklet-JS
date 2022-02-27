/*Declarar un array vacío, y cargarlo de forma
dinámica solicitando al usuario nombres de
forma consecutiva, hasta que se ingrese
“ESC”. Luego recorrer el array, e informar por
alerta el nombre de cada jugador, así como la
posición que ocupa en la colección.*/


class Jugador{
    constructor(nombre,posicion){
        this.nombre = nombre;
        this.posicion = posicion;
    }
}

let jugadores = [];
let nombre = prompt("Ingrese el nombre del jugador: ");

while(nombre != "ESC"){
    let posicion = jugadores.length + 1;
    let jugador = new Jugador(nombre,posicion);
    jugadores.push(jugador);
    nombre = prompt("Ingrese el nombre del jugador: ");
};

jugadores.forEach(jugador => {
    alert(`El jugador ${jugador.nombre} ocupa la posicion ${jugador.posicion}`);
});