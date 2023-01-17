// ACTIVIDAD 5 FILTRAR JUGADORES
// Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores 
// (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con 
// el segundo parámetro. Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los 
// jugadores filtrados.

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

function filtroJugadores(equipo, edad){
    return equipo.filter(e => e.edad == parseInt(edad));
}

for(let i = 0; i < 5; i++){
    let edad = prompt("Ingrese la edad de los jugadores a buscar");
    let encontrados = filtroJugadores(jugadores, edad);
    if(encontrados.length > 0){
        alert(`Los jugadores de ${edad} años son ${encontrados.map(e => e.nombre)}`);
    } else {
        alert(`No hay jugadores de ${edad} años`);
    }
}


// function filtroJugadores(equipo, edad) {
//     return equipo.filter(objeto => objeto.edad == parseInt(edad));
// }
// function listaJugadores(jugadores) {
//     let lista = '';
//     for (const jugador of jugadores) {
//         lista += 'JUGADOR ' + jugador.nombre + ' CAMISETA ' + jugador.camiseta + ' EDAD ' + jugador.edad + '\n'
//     }
//     return lista;
// }
// for (let index = 0; index < 5; index++) {
//     let filtro = filtroJugadores(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
//     if (filtro.length > 0) {
//         alert(listaJugadores(filtro));
//     } else {
//         alert('NO EXISTE JUGADORES CON ESA EDAD');
//     }
// }

