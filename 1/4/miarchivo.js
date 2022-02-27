/*Solicitar al usuario cinco (5) nombres
pertenecientes a integrantes de una
familia. Luego, concatenar dichas
entradas y efectuar una salida por alerta.
*/

let nombre1 = prompt("Ingrese el nombre del primer integrante de la familia: ");
let nombre2 = prompt("Ingrese el nombre del segundo integrante de la familia: ");
let nombre3 = prompt("Ingrese el nombre del tercer integrante de la familia: ");
let nombre4 = prompt("Ingrese el nombre del cuarto integrante de la familia: ");
let nombre5 = prompt("Ingrese el nombre del quinto integrante de la familia: ");

let familia = `${nombre1}, ${nombre2}, ${nombre3}, ${nombre4}, ${nombre5}`;

alert(familia);