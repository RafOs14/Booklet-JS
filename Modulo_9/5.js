// ACTIVIDAD 5 SUSPENDER ESTUDIANTE
// Usando de base la interfaz generada en la actividad 4, añadir un nuevo botòn ‘Suspender’ 
// por cada estudiante. Luego, detectar el click sobre el botón, asegurando que la función manejadora 
// identifique el objeto estudiante seleccionado, y llame a un método suspender(), disparando una 
// salida en el HTML confirmando la suspensión del estudiante.

class Estudiante {
    constructor(nombre, apellido, edad, asignatura) {
        this.id = estudiantes.length;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.asignatura = asignatura;
    }

    suspender(){
        this.suspendido = true;
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
    
    let btnSus = document.getElementsByClassName('btnSus');

    for ( let btn of btnSus) {
        btn.addEventListener("click", (e) => {
            let seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            seleccionado.suspender(estudiantes);
            let notificacion = document.createElement("h3");
            notificacion.innerHTML = `Nombre: ${seleccionado.nombre} -  SUSPENDIDO`;
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
                                    <button id='${estudiante.id}' class='btnEst'>Ver</button>
                                    <button id='${estudiante.id}' class='btnSus'>Suspender</button>`;
        div.appendChild(divEstudiante);               
    }
}

let div = document.createElement("div"); 
document.body.appendChild(form);
document.body.appendChild(div);


//Solucion propuesta

// form.onsubmit = (e) => {
//     e.preventDefault();
//     const inputs = e.target.children;
//     estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
//     mostrarEstudiantes(estudiantes);
//     const btnSuspender = document.getElementsByClassName('btnSuspender');
//     for (const boton of btnSuspender) {
//         boton.onclick = (e) => {
//             const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
//             seleccionado.suspender();
//             console.log(seleccionado);
//             let notificacion = document.createElement("h6");
//             notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  SUSPENDIDO`;
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
//                                    <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>
//                                    <button id='${estudiante.id}' class='btnSuspender'>Suspender</button>`
//         salida.appendChild(divEstudiante);
//     }
// }
// const salida = document.createElement("div");
// document.body.appendChild(form);
// document.body.appendChild(salida);
