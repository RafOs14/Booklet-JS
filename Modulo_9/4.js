// ACTIVIDAD 4 LISTAR ESTUDIANTES
// Usando el array de estudiantes creado en la actividad 3, iterar la colección creando una etiqueta div, 
// cuya estructura interna detalle la información del estudiante, y contenga un botón ‘Seleccionar’, 
// agregando cada estructura al body. Luego, detectar el click sobre el botón, especificando al usuario 
// los datos del alumno seleccionado.

class Estudiante {
    constructor(nombre, apellido, edad, asignatura) {
        this.id = estudiantes.length;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.asignatura = asignatura;
    }
}

let estudiantes = [];

let form = document.createElement("form");

form.innerHTML = `
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre">
    <label for="apellido">Apellido</label>
    <input type="text" name="apellido" id="apellido">
    <label for="edad">Edad</label>
    <input type="number" name="edad" id="edad">
    <label for="asignatura">Asignatura</label>
    <input type="text" name="asignatura" id="asignatura">
    <input type="submit" value="Enviar">
`;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let asignatura = document.getElementById("asignatura").value;
    let estudiante = new Estudiante(nombre, apellido, edad, asignatura);
    estudiantes.push(estudiante);
    listadoEstudiantes(estudiantes);

    let btns = document.getElementsByClassName('btnEst');

    for (let btn of btns) {
        btn.addEventListener("click", (e) => {
            let seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            let notificacion = document.createElement("h3");
            notificacion.innerHTML = `Nombre: ${seleccionado.nombre} -  Edad: ${seleccionado.edad} - Asignatura: ${seleccionado.asignatura}`;
            div.append(notificacion);
        })
    }    
});

function listadoEstudiantes(estudiantes) {
    div.innerHTML = "";
    for (estudiante of estudiantes) {
        let divEstudiante = document.createElement("div");
        divEstudiante.innerHTML = `<p>Estudiante ${estudiante.nombre} 
                                    ${estudiante.apellido} de ${estudiante.edad} años, 
                                    inscripto en ${estudiante.asignatura}</p>
                                    <button id='${estudiante.id}' class='btnEst'>Elegir</button>`;
        div.appendChild(divEstudiante);               
    }
}


let div = document.createElement("div"); 
document.body.appendChild(form);
document.body.appendChild(div);



//Solucion propuesta
// formulario.onsubmit = (e) => {
//     e.preventDefault();
//     const inputs = e.target.children;
//     estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
//     mostrarEstudiantes(estudiantes);
//     const btnEstudiantes = document.getElementsByClassName('btnEstudiante');
//     for (const boton of btnEstudiantes) {
//         boton.onclick = (e) => {
//             const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
//             let notificacion = document.createElement("h6");
//             notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  Edad ${seleccionado.edad}`;
//             salida.prepend(notificacion);
//         }
//     }
// }
// function mostrarEstudiantes(estudiantes) {
//     salida.innerHTML = '';
//     for (const estudiante of estudiantes) {
//         let divEstudiante = document.createElement("div");
//         divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
//                                    <p>${estudiante.edad} / ${estudiante.curso} </p>
//                                    <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>`
//         salida.appendChild(divEstudiante);
//     }
// }
// const salida = document.createElement("div");
// document.body.appendChild(formulario);
// document.body.appendChild(salida);