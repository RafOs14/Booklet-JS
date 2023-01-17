// ACTIVIDAD 3 ALTA DE ESTUDIANTE
// Crear un formulario que permita ingresar la información de un estudiante.
// Luego, escuchar el evento submit sobre el form, capturando las entradas, e invocar un objeto Estudiante usando los valores 
// ingresados, y asociar la instancia a un array de estudiantes. Por último, disparar una salida en el HTML, a modo de 
// confirmación de los datos registrados.


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
    let div = document.createElement("div");
    div.innerHTML = `<p>Estudiante ${estudiante.nombre} ${estudiante.apellido} de ${estudiante.edad} años, inscripto en ${estudiante.asignatura}</p>`;
    document.body.appendChild(div);
});

document.body.appendChild(form);

//Solucion propuesta

// const estudiantes = []
// class Estudiante {
//     constructor(literal) {
//         this.id = estudiantes.length;
//         this.nombre = literal.nombre;
//         this.edad = literal.edad;
//         this.curso = literal.curso;
//      }
// }
// const formulario = document.createElement("form");
// formulario.innerHTML = `<input type="text">
//                         <input type="number">
//                         <input type="text">
//                         <input type="submit">`;
// formulario.onsubmit = (e) => {
//     e.preventDefault();
//     const inputs = e.target.children;
//     estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
//     document.body.append(' ALUMNO REGISTRADO ');
// }



