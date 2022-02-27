/*Solicitar al usuario cuatro (4) productos de
almacén. Si todos los elementos fueron cargados,
realizar una única salida compuesta por el listado
de productos. Caso contrario, la salida será “Error:
Es necesario cargar todos los productos”.*/

let producto = prompt("Ingrese el nombre del producto: ");
let producto2 = prompt("Ingrese el nombre del producto: ");
let producto3 = prompt("Ingrese el nombre del producto: ");
let producto4 = prompt("Ingrese el nombre del producto: ");

if(producto != "" && producto2 != "" && producto3 != "" && producto4 != ""){
    let heladera = `${producto} - ${producto2} - ${producto3} - ${producto4}`;
    document.write(`<h1>${heladera}</h1>`);
}else{
    alert("Error: Es necesario cargar todos los productos");
};