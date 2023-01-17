// ACTIVIDAD 1 EL EQUIPO
// Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de 
// un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  
// que ocupa en la colección.

let equipo = ['Juan', 'Pedro', 'Maria', 'Jose'];

for(let i = 0; i < equipo.length; i++){
    alert(`El jugador ${equipo[i]} ocupa el puesto ${i + 1}`);
}

