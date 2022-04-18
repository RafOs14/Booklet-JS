/*Usando de base la resolución de la actividad 4, añadir un ‘id’ como propiedad a la clase Cantante,
y modificar las instancias, definiendo un identificador único por cada cantante.
Luego, por cada div generado, incluir un botón cuyo id de la etiqueta tenga el valor asociado a la
propiedad ‘id’ del objeto, y el texto de cada botón sea ‘Contratar”.*/

class Cantante {
    constructor(id, nombre, edad, nacionalidad, instrumento, genero, canciones) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.instrumento = instrumento;
        this.genero = genero;
        this.canciones = canciones;
    }
}

const cantantes = [];
cantantes.push(new Cantante(1,"Luis Fonsi", "25", "Argentina", "Guitarra", "Pop", ["Despacito", "Bailando", "Todo esto lo hice por amor"]));
cantantes.push(new Cantante(2,"Shakira", "25", "Colombia", "Voz", "Pop", ["Hasta el amor", "La vida es bella", "La vida es bella"]));
cantantes.push(new Cantante(3,"Camila Cabello", "25", "Colombia", "Voz", "Pop", ["Hasta el amor", "La vida es bella", "La vida es bella"]));

cantantes.forEach(cantante => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${cantante.nombre}</h2>
        <p>Edad: ${cantante.edad}</p>
        <p>Nacionalidad: ${cantante.nacionalidad}</p>
        <p>Instrumento: ${cantante.instrumento}</p>
        <p>Género: ${cantante.genero}</p>
        <p>Canciones: ${cantante.canciones}</p>
        <button id="${cantante.id}">Contratar</button>
    `;
    document.body.appendChild(div);
});