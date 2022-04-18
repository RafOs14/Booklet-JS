/*Declarar una clase Cantante, instanciando al
menos cinco (5) objetos con ella, asignándoles a
un array. Luego, por cada cantante crear una
etiqueta div, cuya estructura interna detalle la
información del objeto, agregando cada
contenedor al body.
*/

class Cantante {
    constructor(nombre, edad, nacionalidad, instrumento, genero, canciones) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.instrumento = instrumento;
        this.genero = genero;
        this.canciones = canciones;
    }
}

const cantantes = [];
cantantes.push(new Cantante("Luis Fonsi", "25", "Argentina", "Guitarra", "Pop", ["Despacito", "Bailando", "Todo esto lo hice por amor"]));
cantantes.push(new Cantante("Shakira", "25", "Colombia", "Voz", "Pop", ["Hasta el amor", "La vida es bella", "La vida es bella"]));
cantantes.push(new Cantante("Camila Cabello", "25", "Colombia", "Voz", "Pop", ["Hasta el amor", "La vida es bella", "La vida es bella"]));

cantantes.forEach(cantante => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h2>${cantante.nombre}</h2>
        <p>Edad: ${cantante.edad}</p>
        <p>Nacionalidad: ${cantante.nacionalidad}</p>
        <p>Instrumento: ${cantante.instrumento}</p>
        <p>Género: ${cantante.genero}</p>
        <p>Canciones: ${cantante.canciones}</p>
    `;
    document.body.appendChild(div);
});
