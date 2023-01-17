// ACTIVIDAD 3 REGISTRO DE ALUMNOS
// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.

let alumnos = [];

for (let i = 0; i < 10; i++) {
    alumnos.push(prompt('Ingrese el nombre del alumno: '));
}

alert(alumnos.join(' - '));