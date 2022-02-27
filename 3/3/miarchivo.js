/*Solicitar al usuario la carga de diez
(10) alumnos de forma consecutiva.
Luego realizar un única salida por
alerta, con el listado de alumnos
registrados.
 */

let alumno = "";

for(let i = 0; i < 10; i++){
    alumno += prompt("Ingrese el nombre del alumno 1: ") + " ";      
};

alert(alumno);
