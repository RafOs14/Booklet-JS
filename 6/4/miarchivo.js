/*Codificar una función con la siguiente cabecera:
buscarJugador(equipo, jugador). En ella, se recibe por
parámetro un array de jugadores (objetos instanciados
empleando la clase de la actividad 3), y el nombre de
un jugador. La función retorna el jugador que coincide
con el nombre.
Realizar al menos tres (3) búsquedas solicitando el
nombre al usuario, e informar sobre el resultado de
cada búsqueda.*/


class Jugador{
    constructor(nombre,numeroCamiseta,edad,lesionado){
        this.nombre = nombre;
        this.numeroCamiseta = numeroCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
};

const equipo = [];

equipo.push(new Jugador("Papu",1,20,false));
equipo.push(new Jugador("Martin",2,20,false));
equipo.push(new Jugador("Juan",3,20,false));
equipo.push(new Jugador("Juan Marcos",4,20,false));
equipo.push(new Jugador("Juan Pablo",5,20,false));

function buscarJugador (equipo,jugador){
    return equipo.find(objeto => objeto.nombre === jugador);
}

for(let index=0; index<equipo.length; index++){
    let busqueda = buscarJugador(equipo,prompt("Ingrese el nombre del jugador: "));
    if(busqueda != undefined){
        alert(`El jugador ${busqueda.nombre} de ${busqueda.edad} años, con el numero de camiseta ${busqueda.numeroCamiseta} 
        ocupa la posicion ${index+1}`);
    }else{
        alert("No se encontro el jugador");
    }
};