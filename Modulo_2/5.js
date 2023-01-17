// ACTIVIDAD 5 VACÍO
// Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, 
// realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será 
// “Error: Es necesario cargar todos los productos”.


let producto1 = prompt('Ingrese un producto: ');
let producto2 = prompt('Ingrese un producto: ');
let producto3 = prompt('Ingrese un producto: ');
let producto4 = prompt('Ingrese un producto: ');

if (producto1 != '' && producto2 != '' && producto3 != '' && producto4 != '') {
    alert(producto1 + ', ' + producto2 + ', ' + producto3 + ', ' + producto4);
}else{
    alert('Error: Es necesario cargar todos los productos');
}
