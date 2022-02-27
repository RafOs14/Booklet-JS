/*Declarar un array de cadenas, compuesto por 
los cuatro (4) nombres pertenecientes a los
integrantes de un equipo. Luego recorrer el
array, e informar por alerta el nombre de cada
jugador, así como la posición que ocupa en la
colección.*/

class Jugador{
    constructor(nombre,posicion){
        this.nombre = nombre;
        this.posicion = posicion;
    }
}

const jugador1 = new Jugador("Papu",1);
const jugador2 = new Jugador("Martin",2);
const jugador3 = new Jugador("Juan",3);
const jugador4 = new Jugador("Juan Marcos",4);

const jugadores = [jugador1,jugador2,jugador3,jugador4];

/*
for(let jugador of jugadores){
    alert(`El jugador ${jugador.nombre} ocupa la posicion ${jugador.posicion}`);
}*/

jugadores.forEach(jugador => {
    alert(`El jugador ${jugador.nombre} ocupa la posicion ${jugador.posicion}`);
});