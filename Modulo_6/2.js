// ACTIVIDAD 2 CARGA EL EQUIPO
// Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  
// hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, 
// así como la posición  que ocupa en la colección.

let nombre = prompt("Ingrese el nombre del jugador");
const equipo = [];

while(nombre != 'ESC'){
    equipo.push(nombre);
    nombre = prompt("Ingrese el nombre del jugador"); 
}

for(let i = 0; i < equipo.length; i++){
    alert(`El jugador ${equipo[i]} ocupa la posición ${i+1}`);
}


