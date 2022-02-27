/*Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en
porcentajes (20%, 30%, etcétera) sobre
los valores ingresados, y realizar una
salida.
*/

let precio = Number(prompt("Ingrese el precio del producto: "));

let descuento20 = precio * 0.20;
let descuento30 = precio * 0.30;

console.log(`El precio del producto es: ${precio}`);
console.log(`El descuento del 20% es: ${descuento20}`);
console.log(`El descuento del 30% es: ${descuento30}`);
console.log(`El precio del producto con 20 de descuento es: ${precio - descuento20}`);
console.log(`El precio del producto con 30 de descuento es: ${precio - descuento30}`);
console.log(`El precio final del producto es: ${precio - descuento20 - descuento30}`);

