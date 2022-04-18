/*Solicitar al usuario cinco (5) tareas de forma
iterativa, cargandolas en un array. Crear una
etiqueta ul, y concatenar una etiqueta li a un
template de caracteres por cada tarea
ingresada, asignando el resultado al interior de
la etiqueta ul. Por último, agregar la lista al
body.*/

var tareas = [];

for (var i = 0; i < 5; i++) {
    tareas.push = prompt("Ingrese tarea");
}

let ul = document.createElement("ul");
let inner = "";
for(const tarea of tareas) {
    inner += `<li>${tarea}</li>`;
}

ul.innerHTML = inner;
document.body.appendChild(ul);
