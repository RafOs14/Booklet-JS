//  ACTIVIDAD 2 ELEGIR ASIGNATURA
// Declarar un array con nombres de asignatura, y generar un select, donde los values de las etiquetas 
// option sean la posición de la asignatura en la colección. Luego, escuchar el evento change sobre el 
// select, asegurando que la función manejadora dispare una salida en el HTML, especificando el elemento 
// escogido por el usuario.


const asignaturas = [
    "Matemáticas",
    "Lengua",
    "Física",
    "Química",
    "Biología",
    "Historia",
    "Geografía",
    "Economía",
    "Filosofía",
    "Inglés",
    "Francés",
    "Alemán",
    "Latín",
    "Informática",
    "Educación Física",
    "Música",
    "Artes Plásticas",
    "Dibujo",
    "Danza",
    "Teatro",
    "Cocina",
    "Cultura Clásica",
    "Cultura Científica",
    "Cultura Contemporánea",
    "Cultura de la Edad Media",
    "Cultura de la Edad Moderna",
    "Cultura de la Edad Contemporánea",
    "Cultura de la Edad Antigua",
    "Cultura de la Edad Neoclásica",
    "Cultura de la Edad Romana",
    "Cultura de la Edad Grecorromana"
];

let select = document.createElement("select");

for (let i = 0; i < asignaturas.length; i++) {
    select.innerHTML += `<option value='${i}'>${asignaturas[i]}</option>`;
}

select.addEventListener("change", (e) => {
    let div = document.createElement("div");
    div.innerHTML += `<p>Has elegido la asignatura ${asignaturas[e.target.value]}</p>`;
    document.body.appendChild(div);
});

document.body.appendChild(select);

//Solucion propuesta

// const materias = ['MATEMATICA', 'LENGUA', 'PROGRAMACION', 'HISTORIA'];
// let select = document.createElement("select");
// for (let index = 0; index < materias.length; index++) {
//     select.innerHTML +=  `<option value='${index}'>${materias[index]}</option>`;
// }
// //ESCUCHAR EL EVENTO CHANGE
// select.addEventListener('change', function (e) {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = materias[e.target.value];
//     document.body.appendChild(h3);
// })
// document.body.appendChild(select);