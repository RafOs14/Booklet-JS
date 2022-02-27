/*Codificar una función con la siguiente cabecera:
filtroJugadores(equipo, edad). En ella, se recibe un
array de jugadores (objetos instanciados empleando la
clase de la actividad 3), y una edad. La función retorna
los jugadores cuya edad coincide con el segundo
parámetro.
Realizar al menos cinco (5) filtros solicitando la edad al
usuario, e informar sobre el resultado de los jugadores
filtrados.*/

class Jugador{
    constructor(nombre,numeroCamiseta,edad,lesionado){
        this.nombre = nombre;
        this.numeroCamiseta = numeroCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
};

const jugadores = [];

jugadores.push(new Jugador("Papu",1,20,false));
jugadores.push(new Jugador("Martin",2,22,false));
jugadores.push(new Jugador("Juan",3,32,false));
jugadores.push(new Jugador("Juan Marcos",4,20,false));
jugadores.push(new Jugador("Juan Pablo",5,25,false));

function filtroJugadores(equipo,edad){  //Funcion que recibe un array de jugadores y una edad
    return equipo.filter(objeto => objeto.edad == parseInt(edad)); //Retorna los jugadores que tengan la edad ingresada
};

function listaJugadores(jugadores){
    let lista = '';
    for(const jugador of jugadores){
        lista += `${jugador.nombre} - ${jugador.edad} - ${jugador.lesionado}\n`;
    }
    return lista;
};

for(let index = 0; index < 5; index++){
    let filtro = filtroJugadores(jugadores, prompt("Ingrese edad del jugador"));
    if(filtro.length > 0){
        alert(listaJugadores(filtro));
    }else{
        alert("No se encontro el jugador con la edad ingresada");
    }    
};