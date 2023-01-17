// ACTIVIDAD 5 DESCUENTOS
// Solicitar al usuario uno o más precios.
// Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y 
// realizar una salida.

let precio1 = prompt("Ingrese el precio del primer producto");
let precio2 = prompt("Ingrese el precio del segundo producto");
let precio3 = prompt("Ingrese el precio del tercer producto");
let precio4 = prompt("Ingrese el precio del cuarto producto");
let precio5 = prompt("Ingrese el precio del quinto producto");

let descuento = prompt("Ingrese el porcentaje de descuento");

let precio1Descuento = precio1 - (precio1 * descuento / 100);
let precio2Descuento = precio2 - (precio2 * descuento / 100);
let precio3Descuento = precio3 - (precio3 * descuento / 100);
let precio4Descuento = precio4 - (precio4 * descuento / 100);
let precio5Descuento = precio5 - (precio5 * descuento / 100);

let total = precio1Descuento + precio2Descuento + precio3Descuento + precio4Descuento + precio5Descuento;

alert("El total a pagar es de $" + total);

